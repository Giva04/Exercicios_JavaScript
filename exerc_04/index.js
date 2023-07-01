// ARRAY DE LETRAS COM FUNÇAO QUE RETORNA A MESMA ARRAY EM MAIUSCULO
let alfabeto = ['a,d,o,z,b,y,c,w,i,x,e,t,f,q']

    // console.log(alfabeto)

        let letrasMaiusculas = 0
        
        for ( i = 0; i < alfabeto.length ;i++) {
            
            letrasMaiusculas = alfabeto[i].toUpperCase(alfabeto[i])
            
        }
        console.log(letrasMaiusculas)