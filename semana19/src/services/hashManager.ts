import { compare, hash, genSalt } from 'bcryptjs';

export const generateHash = async (plaintext: string): Promise<string> => {
    const rounds = 12
    const salt = await genSalt(rounds)
    return await hash(plaintext, salt)
}

export const compareHash = async (
    plaintext: string,
    cyphertext: string
    ): Promise<boolean> => {
        return await compare(plaintext, cyphertext)
    }
