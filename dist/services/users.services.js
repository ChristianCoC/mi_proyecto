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
const getUserServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.UserModel.find();
    return users;
});
exports.getUserServices = getUserServices;
const getUserServicesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.UserModel.findOneBy({ id: id });
    return user;
});
exports.getUserServicesById = getUserServicesById;
const createdUserServices = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.UserModel.create(userData);
    const result = yield data_source_1.UserModel.save(user);
    return user;
});
exports.createdUserServices = createdUserServices;
const updatedUserServices = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.UserModel.findOneBy({ id: id });
    if (!user) {
        return null;
    }
    const updatedUser = yield data_source_1.UserModel.merge(user, data);
    return yield data_source_1.UserModel.save(updatedUser);
});
exports.updatedUserServices = updatedUserServices;
const deletedUserServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.UserModel.findOneBy({ id: id });
    if (!user) {
        return null;
    }
    return yield data_source_1.UserModel.remove(user);
});
exports.deletedUserServices = deletedUserServices;
