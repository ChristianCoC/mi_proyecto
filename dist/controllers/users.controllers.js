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
exports.deletedUsersControllers = exports.updatedUsersControllers = exports.getUsersControllers = exports.createdUsersControllers = void 0;
const users_services_1 = require("../services/users.services");
const createdUsersControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, telefone, password, active } = req.body;
    const newUser = yield (0, users_services_1.createdUserServices)({ name, email, telefone, password, active });
    res.status(201).json(newUser);
});
exports.createdUsersControllers = createdUsersControllers;
const getUsersControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, users_services_1.getUserServices)();
    res.status(200).json(users);
});
exports.getUsersControllers = getUsersControllers;
const updatedUsersControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const newData = req.body;
    const updateUser = yield (0, users_services_1.updatedUserServices)(userId, newData);
    res.status(200).json(updateUser);
});
exports.updatedUsersControllers = updatedUsersControllers;
const deletedUsersControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    yield (0, users_services_1.deletedUserServices)(userId);
    res.status(200).json({ message: "User deleted successfully" });
});
exports.deletedUsersControllers = deletedUsersControllers;
