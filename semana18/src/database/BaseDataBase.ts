import dotenv from "dotenv";
import knex from "knex"

dotenv.config();

export class BaseDataBase {
    protected connection = knex({
        client: "mysql",
        connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: 3306,
        multipleStatements: true
      }
    });

    closeConnection(){
        this.connection.destroy()
    }
}