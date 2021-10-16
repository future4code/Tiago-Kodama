export class User {

    public readonly id?: string
    
    constructor(
        private name: string,
        private email: string,
        private age: number

    ){
        // generate id
    }
}