//Escreva um programa onde, você chame uma função enviando um número.
//A função deve imprimir na tela os números de 1 até o numero que você enviou.


const numbers = (number)  => {
    for(i = 1; i < number; i++)
        console.log ('contando...', i)
}

numbers(11) 