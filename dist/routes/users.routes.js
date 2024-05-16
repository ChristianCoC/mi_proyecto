"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
const authentication_1 = __importDefault(require("../middlewares/authentication"));
const routerUsers = (0, express_1.Router)();
routerUsers.post("/users", users_controllers_1.createdUsersControllers);
routerUsers.get("/users", authentication_1.default, users_controllers_1.getUsersControllers);
routerUsers.get("/users/:id", users_controllers_1.getUsersControllersById);
routerUsers.put("/users/:id", users_controllers_1.updatedUsersControllers);
routerUsers.delete("/users/:id", users_controllers_1.deletedUsersControllers);
exports.default = routerUsers;
