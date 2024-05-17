import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: "turns"
})
export class Turns {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 50
    })
    date: string;

    @Column({
        type: "varchar",
        length: 50
    })
    time: string;

    @Column()
    userId: number;

    @Column({
        type: "varchar",
        length: 50
    })
    status: string;

    @ManyToOne(() => User, (user) => user.turns)
    @JoinColumn({ name: "userId" })
    user: User;
}