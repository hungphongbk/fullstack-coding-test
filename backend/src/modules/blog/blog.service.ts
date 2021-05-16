import { Injectable } from "@nestjs/common";
import Blog from "./blog.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BlogService {
  constructor(@InjectRepository(Blog) private blogRepository: Repository<Blog>) {
  }

  getAllBlogs = () => this.blogRepository.find();
}
