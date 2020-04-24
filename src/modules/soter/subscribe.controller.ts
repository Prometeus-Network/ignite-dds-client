import {Body, Controller, Get, Inject, Param, Post, Res} from "@nestjs/common";
import {ClientKafka} from "@nestjs/microservices";
import {Response} from "express";
import {FileFetcher} from "./fetchers/file.fetcher";

@Controller('/api/v1/subscribe')
export class SubscribeController {
    constructor(
        // @Inject('IGNITE_SERVICE') private client: ClientKafka,
        private readonly fileFetcher: FileFetcher,
    ) {}

    // async onModuleInit() {
    //     this.client.subscribeToResponseOf('ignite.subscribes.add');
    //     await this.client.connect();
    // }

    // @Post('/')
    // public async addSubscribe(
    //     @Body('id') id: string,
    //     @Body('userId') userId: string,
    //     @Body('peerWallet') peerWallet: string,
    //     @Body('peerIp') peerIp: string,
    //     @Body('data') data: object,
    //     @Res() res: Response,
    // ) {
    //     try {
    //         const result = await this.client.send<any>('ignite.subscribes.add', {
    //             id, userId, peerWallet, peerIp, data,
    //         }).toPromise();
    //         console.log(result);
    //         return res.status(200).send({message: 'Subscribe success added!'});
    //     } catch (e) {
    //         return res.status(400).send({message: e.message});
    //     }
    // }

    @Get('/:cid/:userId')
    public async getSubscribeByCommentId(
        @Param('cid') cid: string,
        @Param('userId') userId: string,
        @Res() res: Response
    ) {
        try {
            const likes = await this.fileFetcher.getById(cid, userId + '/subscribes.json');
            return res.send(JSON.parse(likes.toString()));
        } catch (e) {
            return res.status(400).send({message: e.message});
        }
    }
}
