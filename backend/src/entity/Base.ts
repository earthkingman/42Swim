import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, } from "typeorm";

export abstract class Base {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}