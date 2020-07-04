import {Injectable} from "@nestjs/common";
import Web3 from 'web3';
import {MainNetworkService} from "../../services/mainNetwork.service";
import {RootChainContract} from "../../contracts/mainNetwork/rootChain.contract";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

@Injectable()
export class RootChainFetcher {
    private timeAgo: TimeAgo;

    constructor(
        private readonly rootChainContract: RootChainContract,
        private readonly mainNetworkService: MainNetworkService
    ) {
        TimeAgo.addLocale(en);
        this.timeAgo = new TimeAgo('en-US');
    }

    public async getRootChainHashByIndex(index: number) {
        const tx = await this.rootChainContract.getVerificationBlockByIndex(index);
        const event = await this.rootChainContract.getEvent();
        const res = event.find(function(ev) {
            return ev.returnValues.verificationHash === tx.verificationHash;
        });
        let date = new Date(tx.createdAt * 1000);
        const ethTx = await this.mainNetworkService.getTransaction(res.transactionHash);
        const value = Number(ethTx.value);
        return {
            id: index,
            verificationHash: tx.verificationHash,
            operator: tx.operator,
            createdAt: tx.createdAt,
            transactionHash: res.transactionHash,
            address: res.address,
            ago: this.timeAgo.format(date),
            from: res.from,
            to: res.to,
            value: value.toFixed(8),
            fullTransactionData: ethTx
        };
    }

    public async getAllRootChainHashPaginate(
        pageNumber: number,
        pageSize: number
    ) {
        let lastVerificationBlock = await this.rootChainContract.getLastVerificationBlock();
        const event = await this.rootChainContract.getEvent();
        let transactions = {
            'count': lastVerificationBlock,
            'pageNumbers': Math.ceil(lastVerificationBlock / pageSize),
            'data': []
        };
        let counter = lastVerificationBlock - (pageSize * pageNumber);
        let max = counter - pageSize;


        if(max < 0) {
            max = 0
        }

        for (counter; counter > max; counter--) {
            const tx = await this.rootChainContract.getVerificationBlockByIndex(counter);
            const res = event.find(function(ev) {
                return ev.returnValues.verificationHash === tx.verificationHash;
            });
            let date = new Date(tx.createdAt * 1000);
            const ethTx = await this.mainNetworkService.getTransaction(res.transactionHash);
            const value = Number(ethTx.value);
            transactions['data'].push({
                id: counter,
                verificationHash: tx.verificationHash,
                operator: tx.operator,
                createdAt: tx.createdAt,
                transactionHash: res.transactionHash,
                ago: this.timeAgo.format(date),
                from: res.from,
                to: res.to,
                value: value.toFixed(8),
                fullTransactionData: ethTx
            });
        }
        return transactions;
    }
}
