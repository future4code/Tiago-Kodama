export class MyError extends Error {
    constructor(
        public message: string,
        public statusCode?: number
    ){
        super(message)

        if(!statusCode)
            this.statusCode = 400
    }
}