//Faça um programa onde leia um numero e diga se ele é:
//-impar
//-par
//-é um numero primo e impar
//-é par e divisivel por 5

const number = 25

if (number % 2 === 0){

    if(number % 5 === 0) console.log( "O número é par e divisivel por 5")
    else console.log("O numero é par e NÃO é divisivel por 5")
} else {

    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            console.log ("Ele é impar, mas não é primo")
            break
        } else {
            if (i === number -1) console.log("Ele é um numero primo")
        }
} 