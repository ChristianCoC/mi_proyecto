"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const turns_routes_1 = __importDefault(require("./routes/turns.routes"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(users_routes_1.default);
server.use(turns_routes_1.default);
exports.default = server;
