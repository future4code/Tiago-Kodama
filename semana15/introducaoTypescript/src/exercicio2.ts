type dados = {
    maior: number,
    menor: number,
    media: number
}

type amostra = {
    numeros: Array<number>,
    obterEstatisticas: (numeros: Array<number>) => dados
}

function obterEstatisticas(
    numeros: Array<number>
    ):dados {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number): number => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: dados = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const amostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas
}

