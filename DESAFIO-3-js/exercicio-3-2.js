//Escreva um programa onde, você chame a função enviando um número.
//(Aceitar somente valores entre 1 e 10)
//E escrever a tubuada da multplicação 1 ao 10 com o numero informado.

const table = (number) =>{
    if (number > 10 || number < 1){
        console.log("Aceitamos numeros que estejam em 1 e 10")
        return
    }
    
    for(let i =1; i <=10; i++){
        console.log(`${i} x ${number} = ${ i * number}`)
    }
}
table(2) 