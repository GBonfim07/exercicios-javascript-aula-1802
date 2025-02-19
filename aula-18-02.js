//exercicio 1
const dobro = numero => numero * 2;
console.log(dobro(7)); // 14
console.log(dobro(15)); // 30


//exercico 2
const dividir = (num1, num2) => num1 / num2;
console.log(dividir(10, 2)); // 5
console.log(dividir(9, 3));  // 3

//exercicio 3
const mensagemBoasVindas = nome => {
    return `Seja bem-vindo, ${nome}!`;

};
console.log(mensagemBoasVindas("Gustavo")); // "Seja bem-vindo, Carlos!"

//exercicio 4
const executarOperacao = (num1, num2, operacao) => operacao(num1, num2);
console.log(executarOperacao(6, 3, (a, b) => a - b)); // 3

//exercicio 5
const precos = [100, 200, 300, 400];

const precosComDesconto = precos.map(preco => preco * 0.9);
console.log(precosComDesconto); // [90, 180, 270, 360]

//exercicio 6
const idades = [12, 17, 20, 22, 14, 30];

const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade); // [12, 17, 14]

//exercicio 7
const numeros = [2, 3, 4, 5];

const produto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log(produto); // 120


