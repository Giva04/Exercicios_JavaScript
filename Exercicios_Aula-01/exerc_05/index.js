 //Crie uma função chamada "calcularAreaCirculo" que recebe o raio como parâmetro. Dentro da função, declare uma constante
// chamada "pi" e atribua a ela o valor de π (pi). Utilize a constante "pi" para calcular a área do círculo. Imprima o resultado no
// console.

function calcularAreaCirculo(raio) {
    const pi = Math.PI    
    const area = pi * raio ** 2

    console.log(area)
}
calcularAreaCirculo(10)