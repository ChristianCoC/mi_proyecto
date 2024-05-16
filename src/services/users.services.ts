import { UserModel } from "../config/data-source";
import { User } from "../entity/User";

export const getUserServices = async (): Promise<User[]> => {
    const users = await UserModel.find({
        relations: {
            turns: true,
        },
    });
    return users
};

export const getUserServicesById = async (id: number): Promise<User | null> => {
    const user = await UserModel.findOneBy({id:id});
    return user
}

export const createdUserServices = async (userData: User): Promise<User> => {
    const user = await UserModel.create(userData);
    const result = await UserModel.save(user);
    return user;
};

export const updatedUserServices = async (id: number, data: Partial<User>): Promise<User | null> => {
    const user = await UserModel.findOneBy({ id: id });
    if (!user) {
        return null;
    }
    const updatedUser = await UserModel.merge(user, data);
    return await UserModel.save(updatedUser);
}

export const deletedUserServices = async (id: number): Promise<User | null> => {
    const user = await UserModel.findOneBy({ id: id });
    if (!user) {
        return null;
    }
    return await UserModel.remove(user);
}
