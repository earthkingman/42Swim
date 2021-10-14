import dotenv from "dotenv";
dotenv.config();

import { Entity, Column, OneToMany, } from "typeorm";

import { Question } from "./question";
import { Answer } from "./answer";
import { Comment } from "./comment"
import { Base } from "./base";
import { QuestionLike } from "./question_like";
import { AnswerLike } from "./answer_like";

@Entity("user")
export class User extends Base {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column()
  photo: string;

  @Column({ default: 0 })
  is_admin: number;

  @Column({ default: 0 })
  liked_count: number;

  @OneToMany(() => Question, question => question.user)
  question: Question[];

  @OneToMany(() => Answer, answer => answer.user)
  answer: Answer[];

  @OneToMany(() => Comment, comment => comment.user)
  comment: Comment[];

  @OneToMany(() => QuestionLike, question_like => question_like.user)
  question_like: QuestionLike[];

  @OneToMany(() => AnswerLike, answer_like => answer_like.user)
  answer_like: AnswerLike[];


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
