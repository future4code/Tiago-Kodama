import { idGenerator } from "../services/idGenerator";
import { BaseDataBase } from "./BaseDataBase";

export class Seed extends BaseDataBase {
    async execute(){
        try {
            await this.up()
        } catch (error:any) {
            console.log(error.sqlMessage || error.message || 'Can not seed')
            await this.down()

        } finally {
            console.log('Finish seed')
            this.closeConnection()
        }
    }

    async up(){
        console.log('Up')

        const ids:Array<string> = []

        for(let i=0; i<10; i++){
            ids.push(idGenerator())
        }

        const productsToInsert = ids.map((id, index) => {
            return {
                Id: id,
                Name: `Produto ${index}`,
                Description: `Lindo produto ${index}`,
                Price: 6.3*index
            }
        })

        await this.connection('Products').insert(productsToInsert)

        console.log('Inserted values')
    }

    async down(){
        console.log('Down')
        await this.connection.raw(`
            drop tables Tickets, Purchases, Products;
        `)
        console.log('Truncated tables')
    }
}