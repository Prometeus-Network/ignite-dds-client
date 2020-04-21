import {ArchiveService} from '../archive.service';
import {Injectable} from '@nestjs/common';
import {SoterService} from '../soter.service';
// tslint:disable-next-line:no-var-requires
const FileType = require('file-type');

@Injectable()
export class FileFetcher {
    constructor(
        private readonly archiveService: ArchiveService,
        private readonly soterService: SoterService,
    ) {}

    public async getById(cid: string, id: string) {
        const file = await this.soterService.getFileByCid(cid);
        const jsonMap = await this.archiveService.getMapInBuffer(file.data);

        if (!jsonMap[id]) {
            throw new Error('File not found!');
        }

        return this.archiveService.getFileInBuffer(jsonMap[id], file.data);
    }

    public async getAllFiles(cid: string) {
        const file = await this.soterService.getFileByCid(cid);
        const fileType = await FileType.fromBuffer(file.data);
        if (fileType.ext !== 'zip') {
            throw new Error('This not valid CID!');
        }
        const data = [];
        const files = this.archiveService.getFilesInBuffer(file.data);
        for (const entry of files) {
            const fileTypeResult = await FileType.fromBuffer(entry.getData());
            if (
                !entry.isDirectory &&
                !fileTypeResult &&
                entry.entryName !== 'map.json' &&
                entry.entryName !== 'entities.json'
            ) {
                data.push(JSON.parse(entry.getData().toString()));
            }
        }
        return data;
    }

    public async getEntities(cid: string) {
        const file = await this.soterService.getFileByCid(cid);
        const fileType = await FileType.fromBuffer(file.data);
        if (fileType.ext !== 'zip') {
            throw new Error('This not valid CID!');
        }
        const entities = this.archiveService.getFileInBuffer(
            this.archiveService.getEntitiesFileName(),
            file.data,
        );
        return JSON.parse(entities.toString());
    }
}
