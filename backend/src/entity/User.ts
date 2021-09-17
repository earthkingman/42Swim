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

  //아래 두줄 주석 처리해도 fk 처리되는 것으로 보입니다
  //이게 db에 따로 저장되는 것이 아니라 요청시 post에서 select 해오는 것으로 보입니다.
  //그게 아니라 db에 저장되는 것이라면 db 공간을 좀 차지 할 수도 있을 것으로 보입니다.
  @OneToMany(type => Post, post => post.user)
  post: Post[];

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
