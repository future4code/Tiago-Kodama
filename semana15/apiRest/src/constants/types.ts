export enum PRIVILAGE {
    admin = 'ADMIN',
    normal = 'NORMAL'
}

export type user = {
    id: number,
    name: string,
    email: string,
    type: PRIVILAGE,
    age: number
}