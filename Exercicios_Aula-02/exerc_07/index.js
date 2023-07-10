//FUNÇÃO QUE VERFICA SE O ANO É BISSEXTO

let ano = prompt("Digite um ano:")

if ((ano % 4 === 0 && ano % 100 !== 0 ) || ano % 400 === 0) {
        console.log(ano +  " é uma ano bissexto")
} else{
    console.log(ano +  " Não é uma ano bissexto")
}
