//Faça um programa onde os jurados vão dar a explicação para cada nota.
//São permitidas notas de 0 a 10.
//Cada nota deve conter uma mensagem diferente.

const score = Math.floor(Math.random () * (10 - 1) +1)
console.log (score)

switch (score) {
    case 0:
        console.log("Foi muito mal")
        break;
    case 1:
        console.log("Acertou apenas 1")
        break;
    case 2:
        console.log("Acertou apenas 2")
        break;
    case 3:
        console.log("Acertou apenas 3")
        break;
    case 4:
        console.log("Acertou apenas 4")
        break;
    case 5:
        console.log("Quase passou, 5 pontos")
        break;
    case 6:
        console.log("Tirou a média, 6 pontos")
        break;
    case 7:
        console.log("Tirou 7 pontos")
        break;
    case 8:
        console.log("Tirou 8 pontos")
        break;
    case 9:
        console.log("Quase gabaritou, parabeńs nota 9")
        break;
    case 10:
        console.log("Excelente trabalho nota 10")
        break;
    default:
        break;
} 