"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// productRoutes.ts
const express_1 = __importDefault(require("express"));
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = express_1.default.Router();
// Rutas protegidas (requieren autenticación)
router.use(authMiddleware_1.default); // Middleware de autenticación para rutas siguientes
// Rutas protegidas para productos
router.post('/create', ProductController_1.default.createProduct);
router.get('/list', ProductController_1.default.listProducts);
exports.default = router;
