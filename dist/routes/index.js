"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const orderRoutes_1 = __importDefault(require("./orderRoutes"));
const productRoutes_1 = __importDefault(require("./productRoutes"));
const sucursalRoutes_1 = __importDefault(require("./sucursalRoutes"));
const domiciliarioRoutes_1 = __importDefault(require("./domiciliarioRoutes"));
const router = express_1.default.Router();
router.use('/users', userRoutes_1.default);
router.use('/orders', orderRoutes_1.default);
router.use('/products', productRoutes_1.default);
router.use('/sucursales', sucursalRoutes_1.default);
router.use('/domiciliarios', domiciliarioRoutes_1.default);
exports.default = router;
