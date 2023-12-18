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
const ProductController = {
    createProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield models_1.Product.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                sucursalId: req.body.sucursalId
            });
            res.json(product);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    listProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const products = yield models_1.Product.findAll();
            res.json(products);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getProductDetails: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield models_1.Product.findByPk(req.params.productId, {
                include: [models_1.Sucursal],
            });
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.json(product);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    updateProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield models_1.Product.findByPk(req.params.productId);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            product.name = req.body.name || product.name;
            product.price = req.body.price || product.price;
            product.stock = req.body.stock || product.stock;
            product.SucursalId = req.body.sucursalId || product.SucursalId;
            yield product.save();
            res.json(product);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    deleteProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield models_1.Product.findByPk(req.params.productId);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            yield product.destroy();
            res.json({ message: 'Product deleted successfully' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
};
exports.default = ProductController;
