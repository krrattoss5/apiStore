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
const Domiciliario_1 = require("../models/Domiciliario");
const DomiciliarioController = {
    createDomiciliario: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const domiciliario = yield Domiciliario_1.Domiciliario.create({
                name: req.body.name,
                contactInfo: req.body.contactInfo,
                status: req.body.status,
            });
            res.json(domiciliario);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    listDomiciliarios: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const domiciliarios = yield Domiciliario_1.Domiciliario.findAll();
            res.json(domiciliarios);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getDomiciliarioDetails: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const domiciliario = yield Domiciliario_1.Domiciliario.findByPk(req.params.domiciliarioId);
            if (!domiciliario) {
                return res.status(404).json({ error: 'Domiciliario not found' });
            }
            res.json(domiciliario);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    updateDomiciliario: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const domiciliario = yield Domiciliario_1.Domiciliario.findByPk(req.params.domiciliarioId);
            if (!domiciliario) {
                return res.status(404).json({ error: 'Domiciliario not found' });
            }
            domiciliario.name = req.body.name || domiciliario.name;
            domiciliario.contactInfo = req.body.contactInfo || domiciliario.contactInfo;
            domiciliario.status = req.body.status || domiciliario.status;
            yield domiciliario.save();
            res.json(domiciliario);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    deleteDomiciliario: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const domiciliario = yield Domiciliario_1.Domiciliario.findByPk(req.params.domiciliarioId);
            if (!domiciliario) {
                return res.status(404).json({ error: 'Domiciliario not found' });
            }
            yield domiciliario.destroy();
            res.json({ message: 'Domiciliario deleted successfully' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
};
exports.default = DomiciliarioController;
