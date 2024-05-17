"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTurnsServices = exports.updateTurnsServices = exports.getTurnsServicesById = exports.createdTurnsServices = exports.getTurnsServices = void 0;
const data_source_1 = require("../config/data-source");
const getTurnsServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield data_source_1.TurnModel.find({
        relations: {
            user: true
        }
    });
    return turns;
});
exports.getTurnsServices = getTurnsServices;
const createdTurnsServices = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = yield data_source_1.TurnModel.create(data);
    const result = yield data_source_1.TurnModel.save(turn);
    const user = yield data_source_1.UserModel.findOneBy({ id: data.userId });
    if (user) {
        turn.user = user;
        yield data_source_1.TurnModel.save(turn);
    }
    return turn;
});
exports.createdTurnsServices = createdTurnsServices;
const getTurnsServicesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = yield data_source_1.TurnModel.findOneBy({ id: id });
    return turn;
});
exports.getTurnsServicesById = getTurnsServicesById;
const updateTurnsServices = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = yield data_source_1.TurnModel.findOneBy({ id: id });
    if (!turn) {
        return null;
    }
    const updatedTurn = yield data_source_1.TurnModel.merge(turn, data);
    return yield data_source_1.TurnModel.save(updatedTurn);
});
exports.updateTurnsServices = updateTurnsServices;
const deleteTurnsServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = yield data_source_1.TurnModel.findOneBy({ id: id });
    if (!turn) {
        return null;
    }
    return yield data_source_1.TurnModel.remove(turn);
});
exports.deleteTurnsServices = deleteTurnsServices;
