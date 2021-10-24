import knex from "knex";
import { config } from "./config";

export class BaseDataBase {
    protected static connection = knex(config)

    protected async close(){
        BaseDataBase.connection.destroy()
    }
}