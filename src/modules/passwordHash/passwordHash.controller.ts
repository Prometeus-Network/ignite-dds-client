import {Body, Controller, Get, Param, Post, Res} from "@nestjs/common";
import {PasswordHashDto} from "./dto/passwordHash.dto";
import {Response} from "express";
import {NewPasswordHashHandler} from "./useCase/newPasswordHash/newPasswordHash.handler";
import {PasswordHashService} from "./services/passwordHash.service";

@Controller('/api/v1/address')
export class PasswordHashController {

    constructor(
        private readonly handler: NewPasswordHashHandler,
        private readonly passwordHashService: PasswordHashService,
    ) {}

    @Post('/hash/set')
    public async changePasswordHash(
        @Body() changePasswordDto: PasswordHashDto,
        @Res() res: Response,
    ) {
        await this.handler.handle(changePasswordDto);
        return res.status(200).send({message: 'To new hash success changed!'});
    }

    @Get('/hash/:address')
    public async getHash(@Param('address') address: string, @Res() res: Response) {
        const hash = await this.passwordHashService.getAddressHash(address);
        return res.status(200).send({hash});
    }
}
