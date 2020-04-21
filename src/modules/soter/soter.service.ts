import {ConfigService} from '../../config/config.service';
import {HttpService, Injectable} from '@nestjs/common';

@Injectable()
export class SoterService {

    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService,
    ) {}

    public async getFileByCid(cid: string) {
        return await this.httpService.get('https://sandbox.btfssoter.io/btfs/' + cid, {responseType: 'arraybuffer'}).toPromise();
    }
}
