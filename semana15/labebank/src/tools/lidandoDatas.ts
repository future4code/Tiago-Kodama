export const paraDDMMAAA = (dataMilisegundos: number):string => {
    const dataData = new Date(dataMilisegundos)
    const dia = dataData.getDay()
    const mes = dataData.getMonth()
    const ano = dataData.getFullYear()
    const hora = dataData.getHours()
    const minutos = dataData.getMinutes()

    return `${dia}/${mes}/${ano} ${hora}:${minutos}`
}