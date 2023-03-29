//Crie 5 objetos nesse formato {nome:"", sexo:"", profissão:"", idade:"", nacionalidade:""}
//Ao rodar o programa, deve imprimir se a pessoa é aprovada no processo ou não.
//A pessoa deve ser maior de idade e Brasileira para ser aprovado.

const person1 = {nome: "Murilo", idade: 27, sexo: "M", prof: "DEV",nac: "BR"}
const person2 = {nome: "Mari", idade: 25, sexo: "F", prof: "SDR",nac: "BR"}
const person3 = {nome: "Zé", idade: 10, sexo: "M", prof: "ESTUDANTE",nac: "BR"}
const person4 = {nome: "Hermano", idade: 35, sexo: "M", prof: "SEM",nac: "PR"}
const person5 = {nome: "Tica", idade: 15, sexo: "F", prof: "ESTUDANTE",nac: "UR"}

if(person1.idade >=18 && (person1.nac === "BR")){
    console.log("Passou")
}else{
    console.log("Não Passou")
}

if(person2.idade >=18 && (person2.nac === "BR")){
    console.log("Passou")
}else{
    console.log("Não Passou")
}
if(person3.idade >=18 && (person3.nac === "BR")){
    console.log("Passou")
}else{
    console.log("Não Passou")
}
if(person4.idade >=18 && (person4.nac === "BR")){
    console.log("Passou")
}else{
    console.log("Não Passou")
}
if(person5.idade >=18 && (person5.nac === "BR")){
    console.log("Passou")
}else{
    console.log("Não Passou")
} 