import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: "credentials"
})
export class Credential {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 50,
    })
    username: string;

    @Column({
        type: "varchar",
        length: 50
    })
    password: string;

}