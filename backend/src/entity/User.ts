import dotenv from "dotenv";
dotenv.config();
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToMany,
  BeforeUpdate,
} from "typeorm";
import Post from "./Post";
import bcrypt from "bcrypt";
@Entity("users")
export default class User {

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column()
  photo: string;

  @Column({ default: 0 })
  isAdmin: number;

  @OneToMany(type => Post, post => post.user)
  post: Post[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  async savePassword() {
    if (this.password) {
      const hashedPassword = await bcrypt.hashSync(
        this.password,
        +process.env.SALT_ROUNDS
      );
      this.password = hashedPassword;
    }
  }

  @BeforeUpdate()
  async updatePassword() {
    if (this.password) {
      const hashedPassword = await bcrypt.hashSync(
        this.password,
        +process.env.SALT_ROUNDS
      );
      this.password = hashedPassword;
    }
  }
}
