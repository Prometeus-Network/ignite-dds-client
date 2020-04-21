import {Body, Controller, Get, Inject, Param, Post, Res} from "@nestjs/common";
import {ClientKafka} from "@nestjs/microservices";
import {Response} from "express";
import {FileFetcher} from "./fetchers/file.fetcher";

@Controller('/api/v1/unsubscribe')
export class UnsubscribeController {
    constructor(
        @Inject('IGNITE_SERVICE') private client: ClientKafka,
        private readonly fileFetcher: FileFetcher,
    ) {}

    async onModuleInit() {
        this.client.subscribeToResponseOf('ignite.unsubscribes.add');
        await this.client.connect();
    }

    @Post('/')
    public async addUnsubscribe(
        @Body('id') id: string,
        @Body('userId') userId: string,
        @Body('peerWallet') peerWallet: string,
        @Body('peerIp') peerIp: string,
        @Body('data') data: object,
        @Res() res: Response,
    ) {
        const result = await this.client.send<any>('ignite.unsubscribes.add', {
            id, userId, peerWallet, peerIp, data,
        }).toPromise();
        return res.status(200).send({message: 'Unsubscribe success added!'});
    }

    @Get('/:cid/:userId')
    public async getUnSubscribeByCommentId(
        @Param('cid') cid: string,
        @Param('userId') userId: string,
        @Res() res: Response
    ) {
        try {
            const likes = await this.fileFetcher.getById(cid, userId + '/unsubscribes.json');
            return res.send(JSON.parse(likes.toString()));
        } catch (e) {
            return res.status(400).send({message: e.message});
        }
    }
}
