import {HttpModule, Module} from "@nestjs/common";
import {ClientProxyFactory, ClientsModule, Transport} from "@nestjs/microservices";
import {ConfigService} from "../../config/config.service";
import {PostController} from "./post.controller";
import {LikeController} from "./like.controller";
import {CommentController} from "./comment.controller";
import {SubscribeController} from "./subscribe.controller";
import {UnlikeController} from "./unlike.controller";
import {UnsubscribeController} from "./unsubscribe.controller";
import {UserController} from "./user.controller";
import {FileController} from "./file.controller";
import {ConfigModule} from "../../config/config.module";
import {FileFetcher} from "./fetchers/file.fetcher";
import {ArchiveService} from "./archive.service";
import {SoterService} from "./soter.service";
import {SoterController} from "./soter.controller";
// tslint:disable-next-line:no-var-requires
const https = require('https');

@Module({
    imports: [
        HttpModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false,
                }),
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [
        PostController,
        LikeController,
        CommentController,
        SubscribeController,
        UnlikeController,
        UnsubscribeController,
        UserController,
        FileController,
        SoterController,
    ],
    providers: [
        // {
        //     provide: 'IGNITE_SERVICE',
        //     useFactory: (configService: ConfigService) => {
        //         const kafkaOptions = configService.getKafkaOptions();
        //         return ClientProxyFactory.create(kafkaOptions);
        //     },
        //     inject: [ConfigService],
        // },
        FileFetcher,
        ArchiveService,
        SoterService,
    ],
})
export class SoterModule {}
