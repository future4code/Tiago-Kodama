export const extrairNumerosCPf = (cpfSemFormato:string) => {
    return(cpfSemFormato.replace(/\D/g, ''))
}