function tabuada(){
    let num1 = window.document.getElementById('num')

    let multiplo =window.document.getElementById('multiplicador')

    if ( num1.value.length == 0 || multiplo.value.length == 0 ){
    alert('[ERRO] Confira dos numeros digitados')

    }else{

    let n = Number(num1.value)
    let e = Number(multiplo.value)
    let x = 1
    let result = ''
    let respo = window.document.getElementById('resposta')
    respo.innerHTML=` A tabuada do ${n} é  : </br></br>`

    do{
        result = n*x
        resposta .innerHTML +=`${n} X ${x} = ${result}</br>  `, x ++
    }while(x<= e)

    }
}
