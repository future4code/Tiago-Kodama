import { sign, verify } from "jsonwebtoken";
import { IAuthenticationDTO } from "./IAuthenticationDTO";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (payload: IAuthenticationDTO): string => {

    const jwt_token = process.env.JWT_TOKEN as string

  return sign(payload, jwt_token, { expiresIn: "1d" });
};

export const getTokenData = (token: string): (IAuthenticationDTO|null) => {
    try {
        const jwt_token = process.env.JWT_TOKEN as string
        const authenticationDTO = verify(token, jwt_token) as IAuthenticationDTO
        return authenticationDTO

    } catch (error: any) {
        return null
    }
}
