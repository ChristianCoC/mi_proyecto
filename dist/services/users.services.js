"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedUserServices = exports.updatedUserServices = exports.createdUserServices = exports.getUserServicesById = exports.getUserServices = void 0;
const data_source_1 = require("../config/data-source");
const User_1 = require("../entity/User");
let users = [];
let id = 1;
const getUserServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.AppDataSource.getRepository(User_1.User).find();
    return users;
});
exports.getUserServices = getUserServices;
const getUserServicesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return users.find((user) => user.id === id);
});
exports.getUserServicesById = getUserServicesById;
const createdUserServices = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.AppDataSource.getRepository(User_1.User).create(userData);
    const result = yield data_source_1.AppDataSource.getRepository(User_1.User).save(user);
    return user;
});
exports.createdUserServices = createdUserServices;
const updatedUserServices = (id, newData) => __awaiter(void 0, void 0, void 0, function* () {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return undefined;
    }
    users[userIndex] = Object.assign(Object.assign({}, users[userIndex]), newData);
    return users[userIndex];
});
exports.updatedUserServices = updatedUserServices;
const deletedUserServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    users = users.filter((user) => {
        return user.id !== id;
    });
});
exports.deletedUserServices = deletedUserServices;
