import {Body, Controller, Get, Inject, Param, Post, Res} from "@nestjs/common";
import {ClientKafka, Ctx, KafkaContext, MessagePattern, Payload} from "@nestjs/microservices";
import {Response} from "express";
import {FileFetcher} from "./fetchers/file.fetcher";

@Controller('/api/v1/post')
export class PostController {
    constructor(
        @Inject('IGNITE_SERVICE') private client: ClientKafka,
        private readonly fileFetcher: FileFetcher,
    ) {}

    async onModuleInit() {
        this.client.subscribeToResponseOf('ignite.posts.add');
        await this.client.connect();
    }

    @Post('/')
    public async addPost(
        @Body('id') id: string,
        @Body('peerWallet') peerWallet: string,
        @Body('peerIp') peerIp: string,
        @Body('data') data: object,
        @Res() res: Response,
    ) {
        try {
            const result = await this.client.send<any>('ignite.posts.add', {
                id, peerWallet, peerIp, data,
            }).toPromise();
            console.log(result);
            return res.status(200).send({message: 'Post success added!'});
        } catch (e) {
            return res.status(400).send({message: e.message});
        }
    }

    @Get('/:cid/:id')
    public async getPostById(@Param('cid') cid: string, @Param('id') id: string, @Res() res: Response) {
        try {
            const post = await this.fileFetcher.getById(cid, id);
            return res.send(JSON.parse(post.toString()));
        } catch (e) {
            return res.status(400).send({message: e.message});
        }
    }
}
