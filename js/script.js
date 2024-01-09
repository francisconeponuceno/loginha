
function alterarQtd(produto, acao){
    let qtd = document.getElementById('qtd_' + produto)
    let valor = document.getElementById('valor_' + produto)
    let total = document.getElementById('total_' + produto)

    if (acao == '-' && qtd.innerHTML == 0){
        alert('Atenção! A quantidade não pode ser menor que 0.')
    }else{
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        total.innerHTML = qtd.innerHTML * valor.innerHTML
        soma()
    }
    
}

function soma(){
    let soma = 0
    for(let i = 1; i < 4; i++){
        soma += Number(document.getElementById('total_' + i).innerHTML)
    }
    document.getElementById('subtotal').innerHTML = soma
}