import { idGenerator } from "../services/idGenerator";
import { BaseDataBase } from "./BaseDataBase";

export class Seed extends BaseDataBase {
    async run (){
        try {
            await this.up()
            console.log('SEED - UP')

        } catch (error: any) {
            await this.down()
            console.log('SEED - DOWN', error.sqlMessage || error.message)
        
        } finally {
            await this.close()
            console.log('SEED - CLOSE')
        }
    }

    async up (){
        const user1 = idGenerator()
        const user2 = idGenerator()
        const recipe1 = idGenerator()
        const recipe2 = idGenerator()


        await BaseDataBase.connection('User').insert({
            Id: user1,
            Name: 'Tiago',
            Email: `tiago${Math.floor(Math.random()*100)}@email.com`,
            Password: '123456789'
        })

        await BaseDataBase.connection('User').insert({
            Id: user2,
            Name: 'Gustavo',
            Email: `gustavo${Math.floor(Math.random()*100)}@email.com`,
            Password: '123456789'
        })

        await BaseDataBase.connection('Recipe').insert({
            Id: recipe1,
            Title: 'Bolo de coco',
            Description: 'Compre um bolo que é mais fácil',
            Id_user: user1
        })

        await BaseDataBase.connection('Recipe').insert({
            Id: recipe2,
            Title: 'Bolo de cenoura',
            Description: 'Compre um bolo que é mais fácil',
            Id_user: user2
        })

        await BaseDataBase.connection('Follow').insert({
            Id_following: user1,
            Id_User: user2
        })
    }

    async down (){
        await BaseDataBase.connection.raw(`
            DROP TABLES Follow, Recipe, User;
        `)
    }
}