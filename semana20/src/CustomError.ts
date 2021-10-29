export class CustomError extends Error {
    constructor(
        public message: string, 
        public code: number){
        super(message)
    }

    public static notFound = (message: string) => new CustomError(message, 404)
    public static badRequest = (message: string) => new CustomError(message, 400)
    public static forbidden = (message: string) => new CustomError(message, 403)
    public static preCondition = (message: string) => new CustomError(message, 412)
    public static internalServerError = (message: string) => new CustomError(message, 500)
}