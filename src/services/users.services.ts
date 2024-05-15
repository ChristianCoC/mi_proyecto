import IUsers from "../interfaces/IUsers";
import UserDto from "../dto/users.dto";
import { AppDataSource } from "../config/data-source";
import { User } from "../entity/User";

let users: IUsers[] = [];

let id = 1;

export const getUserServices = async () => {
    const users = await AppDataSource.getRepository(User).find();
    return users
};

export const getUserServicesById = async (id: number) => {
    const user = await AppDataSource.getRepository(User).findOneBy({id:id});
    return user
}

export const createdUserServices = async (userData: User) => {
    const user = await AppDataSource.getRepository(User).create(userData);
    const result = await AppDataSource.getRepository(User).save(user);
    return user;
};

export const updatedUserServices = async (id: number, newData: Partial<IUsers>) : Promise<IUsers | undefined> => {
    const userIndex = users.findIndex((user: IUsers) => user.id === id);

    if (userIndex === -1) {
        return undefined;
    }

    users[userIndex] = { ...users[userIndex], ...newData };
    return users[userIndex];
};

export const deletedUserServices = async (id: number) : Promise<void> => {
    users = users.filter((user: IUsers) => {
        return user.id !== id});
};