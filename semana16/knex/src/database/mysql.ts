import knex from "knex";
import dotenv from 'dotenv';

dotenv.config()

export const connection = knex({
	client: "mysql",
	connection: {
    port: 3306,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  }
});

