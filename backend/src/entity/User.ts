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
} from "typeorm";
import bcrypt from "bcrypt";
@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column({ default: "default" })
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
