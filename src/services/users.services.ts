import IUsers from "../interfaces/IUsers";
import UserDto from "../dto/users.dto";

let users: IUsers[] = [];

let id = 1;

export const getUserServices = async () : Promise<IUsers[]>  => {
    return users
};

export const createdUserServices = async (userData: UserDto) : Promise<IUsers> => {
    const newUser: IUsers = {
        id,
        name: userData.name,
        email: userData.email,
        telefone: userData.telefone,
        password: userData.password,
        active: userData.active 
    }
    users.push(newUser);
    id++;
    return newUser;
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