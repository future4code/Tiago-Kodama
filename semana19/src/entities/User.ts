export class User{
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
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