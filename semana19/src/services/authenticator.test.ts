import { generateToken, getTokenData } from './authenticator'
import { IAuthenticationDTO } from './IAuthenticationDTO'

describe('Generate jwt', () => {
    const autenticatorDTO: IAuthenticationDTO = {
        id: '001',
        token: 'abracadabra'
    }

    const jwt = generateToken(autenticatorDTO)

    test('correctly jwt', () => {
        const newauthenticationDTO = getTokenData(jwt)

        expect({
            id: newauthenticationDTO?.id,
            token: newauthenticationDTO?.token
        }).toEqual({
            id: autenticatorDTO.id,
            token: autenticatorDTO.token
        })
    })
})