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
const models_1 = require("../models");
const SucursalController = {
    createSucursal: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req);
        try {
            const sucursal = yield models_1.Sucursal.create({
                name: req.body.name,
                location: req.body.location,
            });
            res.json(sucursal);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    listSucursales: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const sucursales = yield models_1.Sucursal.findAll();
            res.json(sucursales);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getSucursalDetails: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const sucursal = yield models_1.Sucursal.findByPk(req.params.sucursalId);
            if (!sucursal) {
                return res.status(404).json({ error: 'Sucursal not found' });
            }
            res.json(sucursal);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    updateSucursal: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const sucursal = yield models_1.Sucursal.findByPk(req.params.sucursalId);
            if (!sucursal) {
                return res.status(404).json({ error: 'Sucursal not found' });
            }
            sucursal.name = req.body.name || sucursal.name;
            sucursal.location = req.body.location || sucursal.location;
            yield sucursal.save();
            res.json(sucursal);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    deleteSucursal: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const sucursal = yield models_1.Sucursal.findByPk(req.params.sucursalId);
            if (!sucursal) {
                return res.status(404).json({ error: 'Sucursal not found' });
            }
            yield sucursal.destroy();
            res.json({ message: 'Sucursal deleted successfully' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
};
exports.default = SucursalController;
