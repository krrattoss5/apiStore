"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// domiciliarioRoutes.ts
const express_1 = __importDefault(require("express"));
const DomiciliarioController_1 = __importDefault(require("../controllers/DomiciliarioController"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = express_1.default.Router();
// Rutas protegidas (requieren autenticación)
router.use(authMiddleware_1.default); // Middleware de autenticación para rutas siguientes
// Rutas protegidas para domiciliarios
router.post('/create', DomiciliarioController_1.default.createDomiciliario);
router.get('/list', DomiciliarioController_1.default.listDomiciliarios);
exports.default = router;
