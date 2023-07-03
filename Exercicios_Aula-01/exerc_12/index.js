//EXERCICIO QUE CALCULA O FATORIAL DE UM NUMERO DIGITADO PELO USUÁRIO
let numero = parseInt(prompt("Digete um número:"))

let fatorial = 1 

for ( let i = 1; i <= numero; i++ ) {
    fatorial *= i;
}
console.log("O fatorial de " , numero,  "é" , fatorial)