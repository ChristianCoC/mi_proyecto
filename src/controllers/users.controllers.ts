import { Request, Response } from "express";
import { getUserServices, createdUserServices, getUserServicesById, updatedUserServices, deletedUserServices } from "../services/users.services";
import { User } from "../entity/User";

export const createdUsersControllers = async (req: Request, res: Response) => {
    const { id, name, email, birthDate, nDni, credential } = req.body;
    const newUser: User = await createdUserServices({ id, name, email, birthDate, nDni, credential });
    res.status(201).json(newUser);
};

export const getUsersControllers = async (req: Request, res: Response) => {
    const users: User[] = await getUserServices();
    res.status(200).json(users);
};

export const getUsersControllersById = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const user: User | null = await getUserServicesById(userId);
    res.status(200).json(user);
}

export const updatedUsersControllers = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const updatedUser = await updatedUserServices(userId, req.body);
    if (!updatedUser) {
        res.status(404).send("Usuario no encontrado");
    }
    res.status(200).json(updatedUser);
}

export const deletedUsersControllers = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    await deletedUserServices(userId);
    res.status(200).send("Usuario eliminado exitosamente");
}


