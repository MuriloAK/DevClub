/* Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
Você deve enviar como argumentos da função:
-Valor inicial Investido;
-Valor atual do Investimento;
-Tempo em meses, que o valor esta investido;
A função deve retornar a taxa de juros já formatada, ex: 2,5% */

function calculate (valorInicial, valorAtual, tempo) {

    const juros = (valorAtual - valorInicial) / (valorInicial * tempo)

    console.log((juros * 100).toFixed(2) + '%')

}

calculate (1000, 1200, 10) 