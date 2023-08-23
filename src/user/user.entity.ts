import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    name:string;

    @Column() 
    email:string;

    @Column() 
    password:string;

    @Column({ nullable: true }) 
    created_at:Date;

    @Column({ nullable: true }) 
    updated_at:Date;

    @Column({ nullable: true }) 
    deleted_at:Date;
}