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
exports.deleteTurnsControllers = exports.updateTurnsControllers = exports.getTurnsControllersById = exports.createdTurnsControllers = exports.getTurnsControllers = void 0;
const turns_services_1 = require("../services/turns.services");
const getTurnsControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield (0, turns_services_1.getTurnsServices)();
    res.status(200).json(turns);
});
exports.getTurnsControllers = getTurnsControllers;
const createdTurnsControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, date, time, userId, status, user } = req.body;
    const newTurn = yield (0, turns_services_1.createdTurnsServices)({ id, date, time, userId, status, user });
    res.status(201).json(newTurn);
});
exports.createdTurnsControllers = createdTurnsControllers;
const getTurnsControllersById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turnId = parseInt(req.params.id);
    const turn = yield (0, turns_services_1.getTurnsServicesById)(turnId);
    res.status(200).json(turn);
});
exports.getTurnsControllersById = getTurnsControllersById;
const updateTurnsControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turnId = parseInt(req.params.id);
    const updatedTurn = yield (0, turns_services_1.updateTurnsServices)(turnId, req.body);
    if (!updatedTurn) {
        res.status(404).send("Turno no encontrado");
    }
    res.status(200).json(updatedTurn);
});
exports.updateTurnsControllers = updateTurnsControllers;
const deleteTurnsControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turnId = parseInt(req.params.id);
    yield (0, turns_services_1.deleteTurnsServices)(turnId);
    res.status(200).send("Turno eliminado exitosamente");
});
exports.deleteTurnsControllers = deleteTurnsControllers;
