import {Injectable} from "@nestjs/common";
import {CidChainContract} from "../../contracts/testNet/cidChain.contract";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

@Injectable()
export class CidChainFetcher {
    private timeAgo: TimeAgo;

    constructor(
        private readonly cidChainContract: CidChainContract
    ) {
        TimeAgo.addLocale(en);
        this.timeAgo = new TimeAgo('en-US');
    }

    public async getBlockById(index: number) {
        const tx = await this.cidChainContract.getCidChainBlock(index);
        let date = new Date(tx.createdAt * 1000);
        return {
            id: index,
            node: tx.node,
            btfsCid: tx.btfsCid,
            createdAt: tx.createdAt,
            ago: this.timeAgo.format(date),
        };
    }

    public async getAllBlockPaginate(
        pageNumber: number,
        pageSize: number
    ) {
        let lastPushedBlock = await this.cidChainContract.getLastPushedBlock();
        let transactions = {
            'pageNumbers': Math.ceil(lastPushedBlock / pageSize),
            'count': lastPushedBlock,
            'data': []
        };
        let counter = lastPushedBlock - (pageSize * pageNumber);
        let max = counter - pageSize;


        if(max < 0) {
            max = 0
        }

        for (counter; counter > max; counter--) {
            const tx = await this.cidChainContract.getCidChainBlock(counter);
            let date = new Date(tx.createdAt * 1000);
            transactions['data'].push({
                id: counter,
                node: tx.node,
                btfsCid: tx.btfsCid,
                createdAt: tx.createdAt,
                ago: this.timeAgo.format(date),
            });
        }
        return transactions;
    }
}
