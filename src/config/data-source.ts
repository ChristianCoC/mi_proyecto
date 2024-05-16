import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User"
import { Turns } from "../entity/Turns";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Jaimillo81.",
    database: "mi_proyecto",
    synchronize: true,
    logging: false,
    entities: [User, Turns],
    migrations: [],
    subscribers: [],
});

export const UserModel = AppDataSource.getRepository(User)
export const TurnModel = AppDataSource.getRepository(Turns)
