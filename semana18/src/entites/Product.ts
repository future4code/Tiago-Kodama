import { idGenerator } from "../services/idGenerator";

export class Product {
    private readonly id:string;

    constructor(
        private name: string,
        private description: string,
        private price: number,
        private origin?: string,
        private destination?: string
    ){
        this.id = idGenerator()
    }
}