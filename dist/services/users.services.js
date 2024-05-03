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
exports.deletedUserServices = exports.updatedUserServices = exports.createdUserServices = exports.getUserServices = void 0;
let users = [];
let id = 1;
const getUserServices = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getUserServices = getUserServices;
const createdUserServices = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        id,
        name: userData.name,
        email: userData.email,
        telefone: userData.telefone,
        password: userData.password,
        active: userData.active
    };
    users.push(newUser);
    id++;
    return newUser;
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
