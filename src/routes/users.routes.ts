import { Router } from "express";
import { getUsersControllers, createdUsersControllers, updatedUsersControllers, deletedUsersControllers } from "../controllers/users.controllers";

const router: Router = Router();

router.post("/users", createdUsersControllers)
router.get("/users", getUsersControllers)
router.put("/users/:id", updatedUsersControllers)
router.delete("/users/:id", deletedUsersControllers)

export default router;