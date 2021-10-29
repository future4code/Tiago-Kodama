import { BaseDataBase } from "./BaseDataBase";

export class Migrations extends BaseDataBase {

    async run (){
        try {
            await this.up()
            console.log('MIGRATIONS - UP')
            
        } catch (error: any) {
            await this.down()
            console.log('MIGRATIONS - DOWN', error.sqlMessage || error.message)
            
        } finally {
            await this.close()
            console.log('MIGRATIONS - CLOSE')
        }
    }

    async up (){
        await BaseDataBase.connection.raw(`
            CREATE TABLE IF NOT EXISTS User (
                Id varchar(255) NOT NULL PRIMARY KEY,
                Name varchar(255) NOT NULL,
                Email varchar(255) NOT NULL UNIQUE,
                Password varchar(255) NOT NULL,
                CHECK ( length(Password) > 5 )
            );
        `)

        await BaseDataBase.connection.raw(`
            CREATE TABLE IF NOT EXISTS Recipe (
                Id varchar(255) NOT NULL PRIMARY KEY,
                Title varchar(255) NOT NULL,
                Description varchar(255) NOT NULL,
                CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                Id_user varchar(255) NOT NULL,
                FOREIGN KEY (Id_user) REFERENCES User(Id)
            );
        `)

        await BaseDataBase.connection.raw(`
            CREATE TABLE IF NOT EXISTS Follow (
                Id_user varchar(255) NOT NULL,
                Id_following varchar(255) NOT NULL,
                FOREIGN KEY (Id_user) REFERENCES User(Id),
                FOREIGN KEY (Id_following) REFERENCES User(Id)
            );
        `)
    }

    async down (){
        await BaseDataBase.connection.raw(`
            DROP TABLES Follow, Recipe, User;
        `)
    }
}