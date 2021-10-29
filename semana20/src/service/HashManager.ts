
import bcryptjs from 'bcryptjs'
import { config } from 'dotenv';

config()

export class HashManager {
   public static hash = async (
      plainText: string
   ): Promise<string> => {
      const rounds = Number(process.env.BCRYPT_COST);
      const salt = await bcryptjs.genSalt(rounds);
      return bcryptjs.hash(plainText, salt)
   }

   public static compare = async (
    plainText: string, cypherText: string
 ): Promise<boolean> => {
    return bcryptjs.compare(plainText, cypherText)
 }
}
 