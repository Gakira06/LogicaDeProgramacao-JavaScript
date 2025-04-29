function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    if(isNaN(quantidade) || quantidade <= 0){
        alert('valor inválido');
        return;
    }

    //toda vez que comprar diminuir a quantidade do total

    //Se for menor a quantidade não pode comprar
    if(tipoIngresso == 'pista' ) {
        comprarPista(quantidade);
    }else if(tipoIngresso == 'superior'){
        comprarSuperior(quantidade)
    }else {
        comprarInferior(quantidade)
    }

}
function comprarPista(quantidade){
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > pista){
        alert('Não há ingressos suficientes na pista')
        
    }else{
        pista = pista - quantidade;
        document.getElementById('qtd-pista').textContent = pista;
        alert('Compra realizada com sucesso');
            
    }

}


function comprarSuperior(quantidade){
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > superior){
        alert('Não há ingressos suficientes na superior')
        
    }else{
        superior = superior - quantidade;
        document.getElementById('qtd-superior').textContent = superior;
        alert('Compra realizada com sucesso');
        
    }
}

function comprarInferior(quantidade){
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > inferior) {
        alert('Não há ingressos suficientes na inferior');
    } else {
        inferior = inferior - quantidade;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert('Compra realizada com sucesso');
    }
}
