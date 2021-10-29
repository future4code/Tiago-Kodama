import { idGenerator } from "../services/idGenerator"

export class Recipe{
    constructor(
        readonly title: string,
        readonly description: string,
        readonly idUser: string,
        readonly id: string = idGenerator(),
        readonly createdAt?: string
    ){}

}