// FUNÇÃO QUE VEIFICA SE O N É DIVISIVEL POR 3 E 5 

function divisor(numero){
    return numero % 3 === 0 && numero % 5 === 0
}

var numero = 15

if ( divisor(numero)){
    console.log(numero + ' é divisivel por 3 e por 5')
}
else{
    console.log(numero + ' Não é divisivel por 3 e por 5')
}

