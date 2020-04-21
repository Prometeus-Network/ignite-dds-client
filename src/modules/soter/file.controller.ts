import {Body, Controller, Get, Header, Inject, Param, Post, Res, UploadedFile, UseInterceptors} from "@nestjs/common";
import {Response} from "express";
import {ClientKafka} from "@nestjs/microservices";
import {FileInterceptor} from "@nestjs/platform-express";
import {FileFetcher} from "./fetchers/file.fetcher";

@Controller('/api/v1/file')
export class FileController {
    constructor(
        @Inject('IGNITE_SERVICE') private client: ClientKafka,
        private readonly fileFetcher: FileFetcher,
    ) {}

    async onModuleInit() {
        this.client.subscribeToResponseOf('ignite.files.add');
        await this.client.connect();
    }

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    public async uploadFile(
        @Body('id') id: string,
        @Body('peerWallet') peerWallet: string,
        @Body('peerIp') peerIp: string,
        @UploadedFile() file,
        @Res() res: Response,
    ) {
        try {
            const result = await this.client.send<any>('ignite.files.add', {
                id, peerWallet, peerIp, file,
            }).toPromise();
            console.log(result);
            return res.status(200).send({message: 'File success uploaded!'});
        } catch (e) {
            return res.status(400).send({message: e.message});
        }
    }

    @Get('/:cid/:id')
    @Header('Content-Disposition', 'attachment;')
    public async getFileById(@Param('cid') cid: string, @Param('id') id: string, @Res() res: Response) {
        const file = await this.fileFetcher.getById(cid, id);
        return res.end(file);
    }
}
