import { idGenerator } from "../services/idGenerator"

export class User {
    constructor(
        public name: string,
        public email: string,
        public age: number,
        public readonly id?: string
    ){
        if(!id)
            this.id = idGenerator()
    }
}