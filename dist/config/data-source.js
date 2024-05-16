"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnModel = exports.UserModel = exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const Turns_1 = require("../entity/Turns");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Jaimillo81.",
    database: "mi_proyecto",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Turns_1.Turns],
    migrations: [],
    subscribers: [],
});
exports.UserModel = exports.AppDataSource.getRepository(User_1.User);
exports.TurnModel = exports.AppDataSource.getRepository(Turns_1.Turns);
