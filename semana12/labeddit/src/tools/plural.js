export function handlePlural(text, value){

    const qnt = Number(value)
    if(qnt===undefined) return text
    else if(qnt===null) return text
    else if(qnt===0) return text
    else if(qnt===1) return `1 ${text}`   
    else return `${qnt} ${text}s`
}