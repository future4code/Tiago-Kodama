import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();
export interface authenticationData {
  id: string;
}

export class TokenHandler {
  public static generateToken(payload: authenticationData): string {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }

  public static getTokenData(token: string): authenticationData {
    const result: any = jwt.verify(token, process.env.JWT_KEY as string);

    return { id: result.id };
  }
}
