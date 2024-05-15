import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Credential } from "./Credential"

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

}
