import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

    @PrimaryGeneratedColumn()
    userId: number;

    @Column({
        type: "varchar",
        length: 50
    })
    status: string;
}