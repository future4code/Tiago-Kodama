import { BaseDataBase } from "./BaseDataBase";

export class Migration extends BaseDataBase {

    async execute(){
        try {
            await this.up()
        } catch (error: any) {
            await this.down()
            console.log(error.sqlMessage || error.message || 'Error migration')

        } finally {
            this.closeConnection()
        }
    }

    async down(){
        console.log("Down")
        await this.connection.raw(`DROP TABLE Tickets`);      
        await this.connection.raw(`DROP TABLE Purchases`);      
        await this.connection.raw(`DROP TABLE Products`);
        await this.connection.raw(`DROP TABLE Users`);
        console.log('Deleted tables')
      };

    async up(){
        console.log('Up')
        await this.connection.raw(`
            CREATE TABLE IF NOT EXISTS Users (
                Id varchar(255) NOT NULL PRIMARY KEY,
                Email varchar(255) NOT NULL UNIQUE,
                Name varchar(255),
                Age int
            );
        `)

        await this.connection.raw(`
            CREATE TABLE IF NOT EXISTS Products (
                Id varchar(255) NOT NULL PRIMARY KEY,
                Price float,
                Name varchar(255),
                Description varchar(255),
                Origin varchar(255),
                Destination varchar(255)
            );
        `)

        await this.connection.raw(`
            CREATE TABLE IF NOT EXISTS Tickets (
                Id varchar(255) NOT NULL PRIMARY KEY,
                Id_product varchar(255) NOT NULL,
                FOREIGN KEY (Id_product) REFERENCES Products(id)
            );
        `)

        await this.connection.raw(`
            CREATE TABLE IF NOT EXISTS Purchases (
                Id varchar(255) NOT NULL PRIMARY KEY,
                Id_user varchar(255) NOT NULL,
                Id_product varchar(255) NOT NULL,
                FOREIGN KEY (Id_user) REFERENCES Users(id),
                FOREIGN KEY (Id_product) REFERENCES Products(id)
            );
        `)
        console.log('Created tables')
    }
}