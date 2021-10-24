export interface IAuthenticationDTO {
    id: string,
    token: string,
    exp?: number,
    iat?: number
}