import { Request, Response } from "express";
import { getUserServices, createdUserServices, updatedUserServices, deletedUserServices, getUserServicesById } from "../services/users.services";
import IUsers from "../interfaces/IUsers";

export const createdUsersControllers = async (req: Request, res: Response) => {
    const { name, email, birthDate, nDni, credentialsId } = req.body;
    const newUser: IUsers = await createdUserServices({ name, email, birthDate, nDni, credentialsId });
    res.status(201).json(newUser);
};

export const getUsersControllers = async (req: Request, res: Response) => {
    const users: IUsers[] = await getUserServices();
    res.status(200).json(users);
};

export const getUsersControllersById = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const user = await getUserServicesById(userId);
    res.status(200).json(user);
}

export const updatedUsersControllers = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const newData = req.body;
    const updateUser = await updatedUserServices(userId, newData);
    res.status(200).json(updateUser);
};

export const deletedUsersControllers = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    await deletedUserServices(userId);
    res.status(200).json({ message: "User deleted successfully" });
};

