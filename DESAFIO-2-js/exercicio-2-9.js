//Faça um programa onde ele leia 4 numeros.
//Em cada caso, ele deve retornar a mensagem condizente:
//-Todos os números são impares => TODOS OS NUMEROS SÃO IMPARES.
//-Todos os numeros são pares => TODOS OS NUMEROS SÃO PARES.
//Em caso negativo dos casos acima, colocar a mensagem => Há numeros parem e impares.

const numberone = Math.floor(Math.random () * (10 - 1) +1)
console.log(numberone)
const numbertwo = Math.floor(Math.random () * (10 - 1) +1)
console.log(numbertwo)
const numberthree = Math.floor(Math.random () * (10 - 1) +1)
console.log(numberthree)
const numberfour = Math.floor(Math.random () * (10 - 1) +1)
console.log(numberfour)

if (numberone % 2 === 0 && numbertwo % 2 === 0 && numberthree % 2 === 0 && numberfour % 2 === 0){
    console.log ("Pares")
} else if (numberone % 2 !== 0 && numbertwo % 2 !== 0 && numberthree % 2 !== 0 && numberfour % 2 !== 0){
    console.log ("Impares")
} else {
    console.log("Impares e Pares")
} 