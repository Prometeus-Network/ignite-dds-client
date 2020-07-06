import {Response} from "express";
import {Controller, Get, Param, Res} from "@nestjs/common";
import {CidChainFetcher} from "./fetchers/testNet/cidChain.fetcher";

@Controller('/api/v1/binance-smart-chain-test-network/cid-chain')
export class CidChainController {
    constructor(private readonly cidChainFetcher: CidChainFetcher) {}

    @Get('/tx-count')
    public async getTxCount(@Res() res: Response) {
        const txCount = await this.cidChainFetcher.getTxCount();
        return res.status(200).send({txCount});
    }

    @Get('/block/:id')
    public async getOneById(
        @Param('id') id: number,
        @Res() res: Response
    ) {
        const item = await this.cidChainFetcher.getBlockById(id);
        return res.status(200).send(item);
    }

    @Get('/all/:pageNumber/:pageSize')
    public async getAll(
        @Param('pageNumber') pageNumber: number,
        @Param('pageSize') pageSize: number,
        @Res() res: Response
    ) {
        const items = await this.cidChainFetcher.getAllBlockPaginate(
            pageNumber,
            pageSize
        );
        return res.status(200).send(items);
    }
}
