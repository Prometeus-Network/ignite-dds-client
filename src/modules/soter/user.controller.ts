import {Body, Controller, Get, Header, Inject, Param, Post, Res} from "@nestjs/common";
import {ClientKafka} from "@nestjs/microservices";
import {Response} from "express";
import {FileFetcher} from "./fetchers/file.fetcher";

@Controller('/api/v1/user')
export class UserController {
    constructor(
        // @Inject('IGNITE_SERVICE') private client: ClientKafka,
        private readonly fileFetcher: FileFetcher,
    ) {}

    // async onModuleInit() {
    //     this.client.subscribeToResponseOf('ignite.users.add');
    //     await this.client.connect();
    // }

    // @Post('/')
    // public async addUser(
    //     @Body('userId') userId: string,
    //     @Body('peerWallet') peerWallet: string,
    //     @Body('peerIp') peerIp: string,
    //     @Body('data') data: object,
    //     @Res() res: Response,
    // ) {
    //     try {
    //         const result = await this.client.send<any>('ignite.users.add', {
    //             userId, peerWallet, peerIp, data,
    //         }).toPromise();
    //         console.log(result);
    //         return res.status(200).send({message: 'User success added!'});
    //     } catch (e) {
    //         return res.status(400).send({message: e.message});
    //     }
    // }

    @Get('/:cid/:id')
    @Header('Content-Disposition', 'attachment;')
    public async getFileById(@Param('cid') cid: string, @Param('id') id: string, @Res() res: Response) {
        try {
            const user = await this.fileFetcher.getById(cid, id);
            return res.send(JSON.parse(user.toString()));
        } catch (e) {
            return res.status(e.status).send({message: e.message});
        }
    }
}
