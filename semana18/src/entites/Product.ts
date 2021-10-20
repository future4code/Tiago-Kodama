import { idGenerator } from "../services/idGenerator";

export class Product {
    
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public origin?: string,
        public destination?: string,
        public readonly id?:string
    ){
        if(!id)
            this.id = idGenerator()
    }
}