///Crie uma função que valide se um número é positivo, negativo ou zero.
let num = 0
function numero(num) {
    if (num > 0) {
        console.log('O número é positivo');
    }else if (num = 0) {
        console.log('O número é zero');

    }else{
        console.log("O número é negativo") ;
    }
    
};


///Implemente uma função que verifique se uma pessoa é maior de idade.
let idade = 27
function maiorIdade(idade){
    if (idade >= 18){
        console.log('A pessoa é maior de idade');
    }else {
        console.log('A pessoa é menor de idade');
    }
};


///Desenvolva uma função que valide se uma string é vazia ou não.
let str = ''
function stringVazia(str) {
    if (str === '') {
        console.log('A string é vazia');
    }else {
        console.log('A string não é vazia');
    }
};


///Crie uma função que determine se um ano é bissexto
let ano = 2024
function anoBissexto(ano) {
    if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
        console.log('O ano é bissexto');
    }else {
        console.log('O ano não é bissexto');
    }
};

///Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
function media() {
    let num1 = parseInt(prompt('Digite o primeiro número:'));
    let num2 = parseInt(prompt('Digite o segundo número:'));
    if (isNaN (num1) || isNaN (num2)) {
        console.log('Um dos dois não é um numero válido');
        return;
    let media = (num1 + num2) / 2;
    console.log(`A média é : ${media}`);
    }
};


///Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
let numeros = [];
function qtdNumeros(numeros) {
    let.tamanho = length.numeros;
    console.log(`O tamanho do array é: ${tamanho}`);
};



///Crie um array e utilize a função includes para verificar se um elemento específico está presente

let menu = ['Arroz', 'Feijão', 'Macarrão', 'Batata'];
function verificarComidas (menu) {
    let comidaProcurada = prompt('Qual comida você procura?');
    if(menu.includes(comidaProcurada)){
        console.log(`A comida ${comidaProcurada} existe no menu do restaurante`);
    }
}


///Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.
menu = ['Arroz', 'Feijão', 'Macarrão', 'Batata'];
function verificarElemento(menu){
    let incluir = prompt('o QUE você quer incluir no menu: ');
    if (menu.includes(incluir)){
        console.log(`A comida ${incluir} existe no menu do restaurante`);
        return;
    }else{
        menu.push(incluir);
        console.log(`A comida ${incluir} foi adicionada ao menu do restaurante`);
    }
}


///Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
let arrayStrings = ['maçã', 'banana', 'laranja', 'uva'];
function verificarFruta(arrayStrings) {
    let frutaProcurada = prompt('Qual fruta você procura?');
    if(arrayStrings.includes(frutaProcurada)){
        console.log(`A fruta ${frutaProcurada} existe no array`);
    }else{
        console.log(`A fruta ${frutaProcurada} não existe no array`);
    }
}


///Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.
estudantes = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 19 }
];
function verificarEstudante(estudantes) {
    let estudanteProcurado = { nome: 'Maria', idade: 22 };
    let encontrado = estudantes.some(estudante => estudante.nome === estudanteProcurado.nome && estudante.idade === estudanteProcurado.idade);
    if (encontrado) {
        console.log(`O estudante ${estudanteProcurado.nome} está presente no array`);
    } else {
        console.log(`O estudante ${estudanteProcurado.nome} não está presente no array`);
    }
}

///Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.
let nume = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function somaEproduto(nume){
    let soma = 0;
    let produto = 1;
    while (nume.length > 0) {
        let numero = num.pop();
        if (numero % 2 === 0) {
            soma += numero;
        }else {
            produto *= numero;
        }
        nume.length -= 1;
    }
    console.log(`A soma dos números pares é: ${soma}`);
    console.log(`O produto dos números ímpares é: ${produto}`);
}