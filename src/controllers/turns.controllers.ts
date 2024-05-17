import { Request, Response } from "express";
import { createdTurnsServices, deleteTurnsServices, getTurnsServices, getTurnsServicesById, updateTurnsServices } from "../services/turns.services";
import { Turns } from "../entity/Turns";

export const getTurnsControllers = async (req: Request, res: Response) => {
    const turns: Turns[] = await getTurnsServices();
    res.status(200).json(turns);
};

export const createdTurnsControllers = async (req: Request, res: Response) => {
    const { id, date, time, userId, status, user } = req.body;
    const newTurn: Turns = await createdTurnsServices({ id, date, time, userId, status, user });
    res.status(201).json(newTurn);
};

export const getTurnsControllersById = async (req: Request, res: Response) => {
    const turnId = parseInt(req.params.id);
    const turn: Turns | null = await getTurnsServicesById(turnId);
    res.status(200).json(turn);
};

export const updateTurnsControllers = async (req: Request, res: Response) => {
    const turnId = parseInt(req.params.id);
    const updatedTurn = await updateTurnsServices(turnId, req.body);
    if (!updatedTurn) {
        res.status(404).send("Turno no encontrado");
    }
    res.status(200).json(updatedTurn);
};

export const deleteTurnsControllers = async (req: Request, res: Response) => {
    const turnId = parseInt(req.params.id);
    await deleteTurnsServices(turnId);
    res.status(200).send("Turno eliminado exitosamente");
};