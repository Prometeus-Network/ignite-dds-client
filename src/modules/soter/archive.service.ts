import {Injectable, Logger} from '@nestjs/common';
import * as fs from 'fs';
import * as fse from 'fs-extra';
// @ts-ignore
import AdmZip = require('adm-zip');

@Injectable()
export class ArchiveService {
    private readonly logger = new Logger(ArchiveService.name);
    private readonly basePath: string = './files';
    private readonly mapName: string = 'map.json';
    private readonly entitiesName: string = 'entities.json';
    private zipPath: string = '';

    public getFilesInBuffer(fileBuffer: Buffer) {
        const admZip = new AdmZip(fileBuffer);
        return admZip.getEntries();
    }

    public getFileInBuffer(fileName: string, fileBuffer: Buffer) {
        const admZip = new AdmZip(fileBuffer);
        let zipEntry = admZip.getEntry(fileName);
        if (zipEntry) {
            return zipEntry.getData();
        }

        zipEntry = admZip.getEntry('/' + fileName);

        if (zipEntry) {
            return zipEntry.getData();
        }
        throw new Error('File not found!');
    }

    public async getMapInBuffer(fileBuffer: Buffer) {
        try {
            const buffer = this.getFileInBuffer(this.mapName, fileBuffer);
            return JSON.parse(buffer.toString());
        } catch (e) {
            return {};
        }
    }

    public getEntitiesFileName() {
        return this.entitiesName;
    }
}
