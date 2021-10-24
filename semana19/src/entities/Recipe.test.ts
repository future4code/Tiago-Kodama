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
        expect(typeof recipe.getId()).toBe('string')
    })

    test('unique id', () => {
        expect(recipe.getId()).not.toBe(new Recipe('','',''))
    })

    test('title', () => {
        expect(recipe.getTitle()).toBe(title)
    })

    test('description', () => {
        expect(recipe.getDescription()).toBe(descripton)
    })

    test('user id', () => {
        expect(recipe.getIdUser()).toBe(idUser)
    })
})