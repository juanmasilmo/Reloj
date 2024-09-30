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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
//import routerCli from "./router/routerClient";
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({
    extended: true,
}));
//server.use('/api/clients', routerCli);
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.authenticate();
            yield database_1.default.sync();
            console.log("Database connected");
        }
        catch (error) {
            console.log(error);
            console.log("´database connected");
        }
    });
}
connectDB();
exports.default = server;
//# sourceMappingURL=server.js.map