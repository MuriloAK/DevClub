//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
//Porém, os dois nomes devem estar em dois objetos separados.
//EX: const object1 = {name:"João"} e const object2 = {name:"Maria"}.
//João e João = true. João e Maria = false.

const object1 = {name:"João"}
const object2 = {name:"Maria"}

const comp1 = object1.name == object1.name
console.log (comp1)
const comp2 = object1.name == object2.name
console.log (comp2)  