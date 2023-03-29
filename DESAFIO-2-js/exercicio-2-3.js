//Faça um programa que gere um numero aleatório entre 1 e 10, esse número é o ganhador.
//Então ele também irá gerar um numero aleatório entre 1 e 10 e verifica se a pessoa ganhou um não.
//Em caso de ter ganhado, mostra o prêmio, se não ganhou mostra outra mensagem.

const random = Math.floor(Math.random () * (10 - 1) +1)
const winner = Math.floor(Math.random () * (10 - 1) +1)

console.log(random, "random")
console.log(winner, "winner")

if(random === winner){
    console.log("WINNER")
}else{
    console.log("LOSER")
}