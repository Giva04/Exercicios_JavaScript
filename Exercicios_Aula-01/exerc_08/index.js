//Declare uma variável chamada "x" fora de uma função. Em seguida, crie uma função que declare uma variável "x" com um valor diferente. Imprima "x" dentro da função e fora dela para observar se há sombreamento da variável externa.

let car = 'porche'

function myCar() {
    let year = 2023
    console.log(car+" "+year)
}
myCar()