//A prefeitura de uma cidade fez uma pesquisa enter seus habitantes, coletando dados,
//Sobre o salário e número de filhos. A prefeitura deseja saber:
//média do saláario da população;
//média de filhos;
//maior salário;
//O final da leitura se dará com a entrada de um salário negativo;
//Faça isso usando uma função

const hab = [
    {
        nfilhos: 2,
        money: 5000
    },
    {
        nfilhos: 1,
        money: 3500
    },
    {
        nfilhos: 0,
        money: 5500
    },
    {
        nfilhos: 1,
        money: 0
    },
    {
        nfilhos: 0,
        money: -3500
    },
]

function salarioNegativo(information) {

    let i = 0;
    let mediaSalario = 0
    let mediaFilhos = 0
    let maiorSalario = 0

    while (information[i].money > 0) {
        mediaSalario = mediaSalario + information[i].money
        mediaFilhos += information[i].nfilhos
        information[i].money > maiorSalario ? maiorSalario = information[i].money : maiorSalario = maiorSalario 
        i++
    }

    console.log(`Média de Salário R$${(mediaSalario / i).toFixed(0)}`)
    console.log(`Média de Filhos ${(mediaFilhos / i).toFixed(0)}`)
    console.log(`Maior Salário R$${maiorSalario}`)

}

salarioNegativo(hab)