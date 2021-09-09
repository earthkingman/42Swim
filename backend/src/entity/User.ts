import dotenv from "dotenv";
dotenv.config();
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  BeforeInsert,
  OneToMany,
} from "typeorm";
import Post from "./Post";
import bcrypt from "bcrypt";
@Entity("users")
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn("increment")
  @OneToMany(type => Post, post => post.userId)
  id: Post[];

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column()
  photo: string;

  @Column({ default: 0 })
  isadmin: number;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public updated_at: Date;

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
}
