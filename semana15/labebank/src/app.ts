import express from "express";
import cors from "cors";
import routerUser from "./routes/usuarioRoutes";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

app.use(routerUser);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});