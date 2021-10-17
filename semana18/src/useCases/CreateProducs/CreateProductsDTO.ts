export interface ICreateProductsDTO {
    name: string,
    description: string,
    price: number,
    origin?: string,
    destination?: string
}