// ARRAY COM FUNCÃO PARA MOSTRA MAIOR NUMERO

let numeros = [1,5,75,55,9815,1000,4000,3,8,25,35]

    // console.log(numeros)

let maiorNumero = 0

    for ( let i = 0; i < numeros.length; i++ ) {

        let numero  = numeros[i]

        if (numero > maiorNumero) {
            maiorNumero = numero
        }
    }

        console.log( maiorNumero)
