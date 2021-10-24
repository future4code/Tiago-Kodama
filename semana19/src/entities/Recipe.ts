import { idGenerator } from "../services/idGenerator"

export class Recipe{
    constructor(
        private title: string,
        private description: string,
        private idUser: string,
        private id: string = idGenerator()
    ){}

    toModel(){
        return new Recipe(this.title, this.description, this.idUser, this.id)
    }

    getId(){
        return this.id
    }

    getTitle(){
        return this.title
    }

    getDescription(){
        return this.description
    }

    getIdUser(){
        return this.idUser
    }
}