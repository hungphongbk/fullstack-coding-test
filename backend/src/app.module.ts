import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";
import { BlogModule } from "./modules/blog/blog.module";

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
