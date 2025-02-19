//exercicio 1
const dobro = numero => numero * 2;

//exercico 2
const dividir = (num1, num2) => num1 / num2;

//exercicio 3
const mensagemBoasVindas = nome => {
    return `Seja bem-vindo, ${nome}!`;
};

//exercicio 4
const executarOperacao = (num1, num2, operacao) => operacao(num1, num2);

//exercicio 5
const precos = [100, 200, 300, 400];

const precosComDesconto = precos.map(preco => preco * 0.9);

//exercicio 6
const idades = [12, 17, 20, 22, 14, 30];

const menoresDeIdade = idades.filter(idade => idade < 18);

//exercicio 7
const numeros = [2, 3, 4, 5];

const produto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);


