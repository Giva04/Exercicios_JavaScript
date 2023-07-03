// CRIANDO UMA FUNÇÃO QUE INDICA O MENOR NUMERO

let numeros = [55,84,45,39,41,65,5,3,9,7]
    // console.log(numeros)
    
  // variavel que verifica a array  
let menorNumero = numeros[0]

for ( let i = 1;  i < numeros.length; i++ ) {
//VERIFICADOR DO ELEMENTO ATUAL E O MENOR NUMERO
    if ( numeros[i] < menorNumero) {
        menorNumero = numeros[i]
    }
}

    console.log("O menor Número é: " + menorNumero)