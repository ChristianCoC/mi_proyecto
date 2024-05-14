import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Jaimillo81.",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [],
    migrations: [],
    subscribers: [],
})
