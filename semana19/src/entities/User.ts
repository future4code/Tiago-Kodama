import { idGenerator } from "../services/idGenerator"

export class User{
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
        public readonly id: string = idGenerator()
    ){}

    toModel(){
        return new User(this.id, this.name, this.email, this.password)
    }
}