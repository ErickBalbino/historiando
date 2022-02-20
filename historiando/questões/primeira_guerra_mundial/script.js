function verificarQuestao01() {
    let resposta = window.document.getElementsByName('qst1');
    let resultado = window.document.getElementById('resposta1');

    if(resposta[0].checked){
        resultado.innerHTML = `A sua resposta está correta!`
        resultado.style.color = '#008000'
    }else{
        if(resposta[1].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = "#f00"
        }
        if(resposta[2].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[3].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
    }
}

function verificarQuestao02() {
    let resposta = window.document.getElementsByName('qst2') 
    let resultado = window.document.getElementById('resposta2')

    if(resposta[0].checked){
        resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
        resultado.style.color = '#f00'
    }else{
        if(resposta[1].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[2].checked){
            resultado.innerHTML = `A sua resposta está correta!`
            resultado.style.color = '#008000'
        }
        if(resposta[3].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
    }
} 

function verificarQuestao03(){
    let resposta = window.document.getElementsByName('qst3')
    let resultado = window.document.getElementById('resposta3')

    if(resposta[0].checked){
        resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
        resultado.style.color = '#f00'
    }else{
        if(resposta[1].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[2].checked){
            resultado.innerHTML = `A sua resposta está correta!`
            resultado.style.color = '#008000'
        }
        if(resposta[3].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
    }
}

//Verificar questão 4
function verificarQuestao04(){
    let resposta = window.document.getElementsByName('qst4');
    let resultado = window.document.getElementById('resposta4');

    if(resposta[0].checked){
        resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
        resultado.style.color = '#f00'
    }else{
        if(resposta[1].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[2].checked){
            resultado.innerHTML = `A sua resposta está correta!`
            resultado.style.color = '#008000'
        }
        if(resposta[3].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
    }
}

function verificarQuestao05(){ 
    let resposta = window.document.getElementsByName('qst5');
    let resultado = window.document.getElementById('resposta5');

    if(resposta[0].checked){
        resultado.innerHTML = `A sua resposta está correta!`
        resultado.style.color = '#008000'
    }else{
        if(resposta[1].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[2].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[3].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
    }
}