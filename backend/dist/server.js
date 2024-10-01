var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Express from "express";
import db from "./config/database";
//import routerCli from "./router/routerClient";
const server = Express();
server.use(Express.json());
server.use(Express.urlencoded({
    extended: true,
}));
//server.use('/api/clients', routerCli);
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db.authenticate();
            yield db.sync();
            console.log("Database connected");
        }
        catch (error) {
            console.log(error);
            console.log("´database connected");
        }
    });
}
connectDB();
export default server;
//# sourceMappingURL=server.js.map