import {Controller, Get, Param, Res} from "@nestjs/common";
import {RootChainFetcher} from "./fetchers/mainNetwork/rootChain.fetcher";
import {Response} from "express";

@Controller('/api/v1/main-network/root-chain')
export class RootChainController {
    constructor(private readonly rootChainFetcher: RootChainFetcher) {}

    @Get('/hash/:id')
    public async getOneVerificationHash(
        @Param('id') id: number,
        @Res() res: Response
    ) {
        const item = await this.rootChainFetcher.getRootChainHashByIndex(id);
        return res.status(200).send(item);
    }

    @Get('/all/:pageNumber/:pageSize')
    public async getAllVerificationHash(
        @Param('pageNumber') pageNumber: number,
        @Param('pageSize') pageSize: number,
        @Res() res: Response
    ) {
        const items = await this.rootChainFetcher.getAllRootChainHashPaginate(
            pageNumber,
            pageSize
        );
        return res.status(200).send(items);
    }

    @Get('/tx-count')
    public async getTxCount(@Res() res: Response) {
        const txCount = await this.rootChainFetcher.getTxCount();
        return res.status(200).send({txCount});
    }
}
