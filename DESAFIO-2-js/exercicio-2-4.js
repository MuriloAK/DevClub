//Faça um programa que receba 3 numeros inteiros, e deve imprimir qual é o maior e qual é o menor.

const firstnum = Math.floor(Math.random () * (50 - 1) +1)
const seccondnum = Math.floor(Math.random () * (50 - 1) +1)
const thirdnum = Math.floor(Math.random () * (50- 1) +1)

console.log(firstnum)
console.log(seccondnum)
console.log(thirdnum)

if (firstnum > seccondnum && firstnum > thirdnum) {
    console.log("O Primeiro é o Maior")
}else if (seccondnum > thirdnum){
    console.log("O Segundo é o Maior")
}else {
    console.log("O Terceiro é o Maior")
}

if (firstnum < seccondnum && firstnum < thirdnum) {
    console.log("O Primeiro é o Menor")
}else if (seccondnum < thirdnum){
    console.log("O Segundo é o Menor")
}else {
    console.log("O Terceiro é o Menor")
} 