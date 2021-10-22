import { idGenerator } from "../services/idGenerator"

export class User{
    constructor(
        private name: string,
        private email: string,
        private password: string,
        private id: string = idGenerator()
    ){}

    toModel(){
        return new User(this.id, this.name, this.email, this.password)
    }

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }

    getEmail(){
        return this.email
    }

    getPassword(){
        return this.password
    }
}