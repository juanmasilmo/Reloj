import Express from "express";
import db from "./config/database";
//import routerCli from "./router/routerClient";

const server = Express();

server.use(Express.json());
server.use(
  Express.urlencoded({
    extended: true,
  })
);
//server.use('/api/clients', routerCli);
async function connectDB() {
  try {
    await db.authenticate();
    await db.sync();
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    console.log("´database connected");
  }
}
connectDB();
export default server;
