/**
 * a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
 * R: passamos ao rodar index no process.argv
 * 
 *  b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
 */

 const [,,inputName, inputAge] = process.argv

 console.log(`Olá, ${inputName}! 
 Você tem ${inputAge} anos.`)
 
 console.log(`Em sete anos você terá ${Number(inputAge)+7}`)