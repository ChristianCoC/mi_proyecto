import { TurnModel, UserModel } from "../config/data-source";
import { Turns } from "../entity/Turns";

export const getTurnsServices = async (): Promise<Turns[]> => {
    const turns = await TurnModel.find();
    return turns
};

export const createdTurnsServices = async (data: Turns): Promise<Turns> => {
    const turn = await TurnModel.create(data);
    const result = await TurnModel.save(turn);

    const user = await UserModel.findOneBy({ id: data.userId })
    if (user) {
        user.turns = turn
        await UserModel.save(user)
    } else {
        throw new Error("User not found")
    }

    return turn
};

export const getTurnsServicesById = async (id: number): Promise<Turns | null> => {
    const turn = await TurnModel.findOneBy({ id: id });
    return turn
};

export const updateTurnsServices = async (id: number, data: Partial<Turns>): Promise<Turns | null> => {
    const turn = await TurnModel.findOneBy({ id: id });
    if (!turn) {
        return null;
    }
    const updatedTurn = await TurnModel.merge(turn, data);
    return await TurnModel.save(updatedTurn);
};

export const deleteTurnsServices = async (id: number): Promise<Turns | null> => {
    const turn = await TurnModel.findOneBy({ id: id });
    if (!turn) {
        return null;
    }
    return await TurnModel.remove(turn);
};