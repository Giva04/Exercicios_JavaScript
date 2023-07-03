// EXERCIO QUE RETORNA AS PALAVRAS DA ARRAY QUE INICIAM COM A LETRA "A"

const palavras = ['amor','casa','abacate','rua','anjo','bicicleta']
        // console.log(palavras)

const palavrasFiltradas = filtrarPalavraInciadaComA(palavras)

function filtrarPalavraInciadaComA(palavras) {
    let palavraInicadaComA = []

    for (let i = 0; i < palavras.length; i++) {
        //variavel que seleciona a palavra que inicia com a letra A e transforma em Maiusculo
        let primeiraLetra = palavras[i].charAt(0).toUpperCase();    

        if (primeiraLetra === 'A') {
            palavraInicadaComA.push(palavras[i]);
        }
    }
    return palavraInicadaComA
}
console.log(palavrasFiltradas)