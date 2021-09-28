import dotenv from "dotenv";
dotenv.config();
import {
  Entity,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import Question from "./Question";
import Answer from "./Answer";
import Comment from "./Comment"
import Base from "./Base";
import Like from "./Like"

@Entity("users")
export default class User extends Base {
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

  @Column({ default: 0 })
  likedCount: number;

  @OneToMany(type => Question, question => question.user)
  question: Question[];

  @OneToMany(type => Answer, answer => answer.user)
  answer: Answer[];

  @OneToMany(type => Comment, comment => comment.user)
  comment: Comment[];

  @ManyToMany(type => Like, like => like.user)
  @JoinTable()
  like: Like[];



  // @BeforeInsert()
  // async savePassword() {
  //   if (this.password) {
  //     const hashedPassword = await bcrypt.hashSync(
  //       this.password,
  //       +process.env.SALT_ROUNDS
  //     );
  //     this.password = hashedPassword;
  //   }
  // }

  // @BeforeUpdate()
  // async updatePassword() {
  //   if (this.password) {
  //     const hashedPassword = await bcrypt.hashSync(
  //       this.password,
  //       +process.env.SALT_ROUNDS
  //     );
  //     this.password = hashedPassword;
  //   }
  // }
}
