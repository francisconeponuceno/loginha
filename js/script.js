
function alterarQtd(produto, acao){
    let qtd = document.getElementById('qtd_' + produto)
    let valor = document.getElementById('valor_' + produto)
    let total = document.getElementById('total_' + produto)

    if (acao == '-' && qtd.innerHTML == 0){
        alert('Atenção! A quantidade não pode ser menor que 0.')
        x()
        
    }else{
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        const valortotal = qtd.innerHTML * somentenumeros(valor.innerHTML)
        total.innerHTML = formatarvalor(valortotal)
        soma()
    }
    
}

function soma(){
    let soma = 0
    for(let i = 1; i < 4; i++){
        let numero = somentenumeros(document.getElementById('total_' + i).innerHTML)
        soma += Number(numero)
    }
    document.getElementById('subtotal').innerHTML = formatarvalor(soma)
}

function somentenumeros(n){
    return n.replace(/\D/g,'')
}

function formatarvalor(n){
    return 'R$ ' + n.toLocaleString('pt-br')
}

