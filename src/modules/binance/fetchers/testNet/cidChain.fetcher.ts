import {Injectable} from "@nestjs/common";
import {CidChainBinanceContract} from "../../contracts/testNet/cidChainBinance.contract";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import {TestNetworkService} from "../../services/testNetwork.service";

@Injectable()
export class CidChainFetcher {
    private timeAgo: TimeAgo;

    constructor(
        private readonly cidChainContract: CidChainBinanceContract,
        private readonly testNetworkService: TestNetworkService
    ) {
        TimeAgo.addLocale(en);
        this.timeAgo = new TimeAgo('en-US');
    }

    public async getTxCount() {
        return this.cidChainContract.getLastPushedBlock();
    }

    public async getBlockById(index: number) {
        const tx = await this.cidChainContract.getCidChainBlock(index);
        let date = new Date(tx.createdAt * 1000);
        const event = await this.cidChainContract.getEvent();
        const res = event.find(function(ev) {
            return ev.returnValues.btfsCid === tx.btfsCid;
        });
        const ethTx = await this.testNetworkService.getTransaction(res.transactionHash);
        const value = Number(ethTx.value);
        return {
            transactionHash: res.transactionHash,
            id: index,
            node: tx.node,
            btfsCid: tx.btfsCid,
            createdAt: tx.createdAt,
            ago: this.timeAgo.format(date),
            // @ts-ignore
            from: res.from,
            // @ts-ignore
            to: res.to,
            value: value.toFixed(8),
            fullTransactionData: ethTx
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
        const event = await this.cidChainContract.getEvent();
        for (counter; counter > max; counter--) {
            const tx = await this.cidChainContract.getCidChainBlock(counter);
            let date = new Date(tx.createdAt * 1000);
            const res = event.find(function(ev) {
                return ev.returnValues.btfsCid === tx.btfsCid;
            });
            const ethTx = await this.testNetworkService.getTransaction(res.transactionHash);
            const value = Number(ethTx.value);
            transactions['data'].push({
                id: counter,
                node: tx.node,
                btfsCid: tx.btfsCid,
                createdAt: tx.createdAt,
                ago: this.timeAgo.format(date),
                // @ts-ignore
                from: res.from,
                // @ts-ignore
                to: res.to,
                value: value.toFixed(8),
                fullTransactionData: ethTx
            });
        }
        return transactions;
    }
}
