import {Controller, Get, Param, Res} from "@nestjs/common";
import {RootChainFetcher} from "./fetchers/mainNetwork/rootChain.fetcher";
import {Response} from "express";
import {CidBlockFetcher} from "./fetchers/plasma/cidBlock.fetcher";

@Controller('/api/v1/plasma-network/cid-block')
export class CidBlockController {
    constructor(private readonly cidBlockFetcher: CidBlockFetcher) {}

    @Get('/block/:id')
    public async getOneVerificationHash(
        @Param('id') id: number,
        @Res() res: Response
    ) {
        const item = await this.cidBlockFetcher.getPlasmaBlockById(id);
        return res.status(200).send(item);
    }

    @Get('/all/:pageNumber/:pageSize')
    public async getAllVerificationHash(
        @Param('pageNumber') pageNumber: number,
        @Param('pageSize') pageSize: number,
        @Res() res: Response
    ) {
        const items = await this.cidBlockFetcher.getAllPlasmaBlockPaginate(
            pageNumber,
            pageSize
        );
        return res.status(200).send(items);
    }
}
