import { Router } from "express";
import { getUsersControllers, createdUsersControllers, getUsersControllersById, updatedUsersControllers, deletedUsersControllers } from "../controllers/users.controllers";
import auth from "../middlewares/authentication";

const routerUsers: Router = Router();

routerUsers.post("/users", createdUsersControllers)
routerUsers.get("/users", auth, getUsersControllers)
routerUsers.get("/users/:id", getUsersControllersById)
routerUsers.put("/users/:id", updatedUsersControllers)
routerUsers.delete("/users/:id", deletedUsersControllers)

export default routerUsers;