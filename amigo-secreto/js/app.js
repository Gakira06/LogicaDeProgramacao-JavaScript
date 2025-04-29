let amigos = [];

function adicionar(){

    //Pegar o nome escrito
    let nome = document.getElementById('nome-amigo');
    if (nome.value == ''){
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(nome.value)){
        alert('nome ja adicionado');
        return;
    }
    //Incluir o nome escrito
    let listaAmigos = document.getElementById('lista-amigos');

    amigos.push(nome.value);
    
    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = nome.value;
    }else{
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nome.value;
    }

    //Limpar o campo toda vez que adc
    nome.value = '';

}

function sortear(){
    if(amigos.length < 3){
        alert('Minimo 3 amigos');
        return;
    }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++ ){

        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->' + amigos[0];
        }else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->' + amigos[i + 1] + '<br>'
        }
    }

}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar(){
    amigos = [];
    listaAmigos = document.getElementById('lista-amigos').innerHTML = '';
    sorteio = document.getElementById('lista-sorteio').innerHTML = '';
    
}

