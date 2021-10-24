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
        await BaseDataBase.connection('User').insert({
            Id: '001',
            Name: 'Tiago',
            Email: 'tiago@email.com',
            Password: '123456789'
        })

        await BaseDataBase.connection('User').insert({
            Id: '002',
            Name: 'Gustavo',
            Email: 'gustavo@email.com',
            Password: '123456789'
        })

        await BaseDataBase.connection('Recipe').insert({
            Id: '001',
            Title: 'Bolo de coco',
            Description: 'Compre um bolo que é mais fácil',
            Id_user: '001'
        })

        await BaseDataBase.connection('Recipe').insert({
            Id: '002',
            Title: 'Bolo de cenoura',
            Description: 'Compre um bolo que é mais fácil',
            Id_user: '002'
        })

        await BaseDataBase.connection('Follow').insert({
            Id_following: '001',
            Id_User: '002'
        })
    }

    async down (){
        await BaseDataBase.connection.raw(`
            DROP TABLES Follow, Recipe, User;
        `)
    }
}