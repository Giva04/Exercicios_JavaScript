// Declare uma variável chamada "x" fora de qualquer função. Em seguida, crie uma função que declare uma variável "y" e imprima tanto "x" quanto "y" no console. Tente acessar "x" e "y" fora da função e observe o resultado.

let marca =  'BMW '
    // console.log(marca)


function meuCarro() {
    const modelo = 'X6'
    const carro = marca + modelo
    console.log(carro)
}
meuCarro()
