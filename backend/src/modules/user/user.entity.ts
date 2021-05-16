import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Blog from "../blog/blog.entity";

@Entity()
class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Blog, blog => blog.user)
  blogs: Blog[];

}

export default User;
