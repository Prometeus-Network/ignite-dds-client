import {Body, Controller, Get, Inject, Param, Post, Res} from "@nestjs/common";
import {ClientKafka} from "@nestjs/microservices";
import {Response} from "express";
import {FileFetcher} from "./fetchers/file.fetcher";

@Controller('/api/v1/comment')
export class CommentController {
    constructor(
        // @Inject('IGNITE_SERVICE') private client: ClientKafka,
        private readonly fileFetcher: FileFetcher,
    ) {}

    // async onModuleInit() {
    //     this.client.subscribeToResponseOf('ignite.comments.add');
    //     await this.client.connect();
    // }

    // @Post('/')
    // public async addComment(
    //     @Body('commentId') commentId: string,
    //     @Body('postId') postId: string,
    //     @Body('peerWallet') peerWallet: string,
    //     @Body('peerIp') peerIp: string,
    //     @Body('data') data: object,
    //     @Res() res: Response,
    // ) {
    //     try {
    //         const result = await this.client.send<any>('ignite.comments.add', {
    //             commentId, postId, peerWallet, peerIp, data,
    //         }).toPromise();
    //         console.log(result);
    //         return res.status(200).send({message: 'Comment success added!'});
    //     } catch (e) {
    //         return res.status(400).send({message: e.message});
    //     }
    // }

    @Get('/:cid/:postId')
    public async getCommentsByPostId(
        @Param('cid') cid: string,
        @Param('postId') postId: string,
        @Res() res: Response
    ) {
        try {
            const likes = await this.fileFetcher.getById(cid, postId + '/comments.json');
            return res.send(JSON.parse(likes.toString()));
        } catch (e) {
            return res.status(400).send({message: e.message});
        }
    }
}
