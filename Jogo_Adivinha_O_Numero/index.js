// gerar numero
// gerar chute usuario
// comparar acerto ou erro
// informar resultado


let numeroOculto = parseInt(Math.random() * 11)
    console.log(numeroOculto)
let numeroUsuario = prompt("Tente adivinar o número oculto: ")


    if (numeroUsuario  == numeroOculto ){
        alert("Voce acertou")
    }
    else{
        alert("Tente novamente")
    }
    

