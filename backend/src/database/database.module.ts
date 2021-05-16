import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Blog from "../modules/blog/blog.entity";
import User from "../modules/user/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "fullstack-test.cl7iva6ioqku.ap-southeast-1.rds.amazonaws.com",
      port: 5432,
      username: "postgres",
      password: "hungphong",
      database: "postgres",
      entities: [
        Blog, User,
      ],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {
}
