import {Injectable} from "@nestjs/common";
import {CidBlockContract} from "../../contracts/plasma/cidBlock.contract";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

@Injectable()
export class CidBlockFetcher {
    private timeAgo: TimeAgo;

    constructor(
        private readonly cidBlockContract: CidBlockContract
    ) {
        TimeAgo.addLocale(en);
        this.timeAgo = new TimeAgo('en-US');
    }

    public async getPlasmaBlockById(index: number) {
        const tx = await this.cidBlockContract.getPlasmaBlock(index);
        const event = await this.cidBlockContract.getEvent(tx.btfsCid);
        const res = event.find(function(ev) {
            return ev.returnValues.btfsCid === tx.btfsCid;
        });
        let date = new Date(tx.createdAt * 1000);
        return {
            id: index,
            btfsCid: tx.btfsCid,
            previousBtfsCid: tx.previousBtfsCid,
            operator: tx.operator,
            createdAt: tx.createdAt,
            address: res.address,
            transactionHash: res.transactionHash,
            ago: this.timeAgo.format(date),
        };
    }

    public async getAllPlasmaBlockPaginate(
        pageNumber: number,
        pageSize: number
    ) {
        let lastCommittedBlock = await this.cidBlockContract.getLastCommittedBlock();
        const event = await this.cidBlockContract.getEvent('');
        let transactions = {
            'pageNumbers': Math.ceil(lastCommittedBlock / pageSize),
            'count': lastCommittedBlock,
            'data': []
        };
        let counter = lastCommittedBlock - (pageSize * pageNumber);
        let max = counter - pageSize;


        if(max < 0) {
            max = 0
        }

        for (counter; counter > max; counter--) {
            const tx = await this.cidBlockContract.getPlasmaBlock(counter);
            const res = event.find(function(ev) {
                return ev.returnValues.btfsCid === tx.btfsCid;
            });
            let date = new Date(tx.createdAt * 1000);
            transactions['data'].push({
                id: counter,
                btfsCid: tx.btfsCid,
                previousBtfsCid: tx.previousBtfsCid,
                address: res.address,
                operator: tx.operator,
                createdAt: tx.createdAt,
                transactionHash: res.transactionHash,
                ago: this.timeAgo.format(date),
            });
        }
        return transactions;
    }
}
