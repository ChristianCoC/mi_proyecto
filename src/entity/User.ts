import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Credential } from "./Credential"
import { Turns } from "./Turns"

@Entity({
   name: "users"
})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 50,
    })
    name: string

    @Column({
        type: "varchar",
        length: 50,
        unique: true
    })
    email: string

    @Column({
        type: "varchar",
        length: 50
    })
    birthDate: string

    @Column({
        type: "int"
    })
    nDni: number

    @Column(
        () => Credential
    )
    credential: Credential

    @OneToMany(() => Turns, (turns) => turns.user)
    turns: Turns[] 
    
}
