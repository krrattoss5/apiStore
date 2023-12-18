"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// sucursalRoutes.ts
const express_1 = __importDefault(require("express"));
const SucursalController_1 = __importDefault(require("../controllers/SucursalController"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = express_1.default.Router();
// Rutas protegidas (requieren autenticación)
router.use(authMiddleware_1.default); // Middleware de autenticación para rutas siguientes
// Rutas protegidas para sucursales
router.post('/create', SucursalController_1.default.createSucursal);
router.get('/list', SucursalController_1.default.listSucursales);
exports.default = router;
