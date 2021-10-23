import knex from "knex";
import { config } from "./config";

export class BaseDataBase {
    protected static connection = knex(config)

    protected close(){
        BaseDataBase.connection.destroy()
    }
}