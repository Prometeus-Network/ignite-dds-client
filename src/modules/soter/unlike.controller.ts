import {Body, Controller, Get, Inject, Param, Post, Res} from "@nestjs/common";
import {ClientKafka} from "@nestjs/microservices";
import {Response} from "express";
import {FileFetcher} from "./fetchers/file.fetcher";

@Controller('/api/v1/unlike')
export class UnlikeController {
    constructor(
        // @Inject('IGNITE_SERVICE') private client: ClientKafka,
        private readonly fileFetcher: FileFetcher,
    ) {}

    // async onModuleInit() {
    //     this.client.subscribeToResponseOf('ignite.unlikes.add');
    //     await this.client.connect();
    // }

    // @Post('/')
    // public async addUnlike(
    //     @Body('id') id: string,
    //     @Body('commentId') commentId: string,
    //     @Body('peerWallet') peerWallet: string,
    //     @Body('peerIp') peerIp: string,
    //     @Body('data') data: object,
    //     @Res() res: Response,
    // ) {
    //     const result = await this.client.send<any>('ignite.unlikes.add', {
    //         id, commentId, peerWallet, peerIp, data,
    //     }).toPromise();
    //     console.log(result);
    //     return res.status(200).send({message: 'Unlike success added!'});
    // }

    @Get('/:cid/:commentId')
    public async getLikeByCommentId(
        @Param('cid') cid: string,
        @Param('commentId') commentId: string,
        @Res() res: Response
    ) {
        try {
            const likes = await this.fileFetcher.getById(cid, commentId + '/unlikes.json');
            return res.send(JSON.parse(likes.toString()));
        } catch (e) {
            return res.status(400).send({message: e.message});
        }
    }
}
