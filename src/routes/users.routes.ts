import { Router } from "express";
import { getUsersControllers, createdUsersControllers, updatedUsersControllers, deletedUsersControllers } from "../controllers/users.controllers";
import auth from "../middlewares/authentication";

const router: Router = Router();

router.post("/users", createdUsersControllers)
router.get("/users", auth, getUsersControllers)
router.put("/users/:id", updatedUsersControllers)
router.delete("/users/:id", deletedUsersControllers)

export default router;