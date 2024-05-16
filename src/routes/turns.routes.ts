import { Router } from "express";
import { createdTurnsControllers, getTurnsControllers, getTurnsControllersById, updateTurnsControllers, deleteTurnsControllers } from "../controllers/turns.controllers";

const routerTurns: Router = Router();

routerTurns.get("/turns", getTurnsControllers);
routerTurns.post("/turns", createdTurnsControllers);
routerTurns.get("/turns/:id", getTurnsControllersById);
routerTurns.put("/turns/:id", updateTurnsControllers);
routerTurns.delete("/turns/:id", deleteTurnsControllers);

export default routerTurns;