// FUNCÃO QUE VERIFICA A IDADE
function podeVotar (nome,idade) {
    if (idade >= 16){
        return nome + ' Você pode votar'
    }
    else {
        return nome + ' Você ainda não tem idade para votar'
    }
}

const nome = prompt(" Digite seu Nome:")
const idade = parseInt(prompt(" Digite a sua Idade"))

const mensagem = podeVotar(nome, idade)
alert(mensagem)