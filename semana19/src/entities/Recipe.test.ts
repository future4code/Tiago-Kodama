import { Recipe } from "./Recipe";

describe(`Recipe entitie`, () => {
    const title = 'Some title'
    const descripton = 'Some description'
    const idUser = '001'

    const recipe = new Recipe(
        title,
        descripton,
        idUser
    )

    test('exist id', () => {
        expect(typeof recipe.id).toBe('string')
    })

    test('unique id', () => {
        expect(recipe.id).not.toBe(new Recipe('','',''))
    })

    test('title', () => {
        expect(recipe.title).toBe(title)
    })

    test('description', () => {
        expect(recipe.description).toBe(descripton)
    })

    test('user id', () => {
        expect(recipe.idUser).toBe(idUser)
    })
})