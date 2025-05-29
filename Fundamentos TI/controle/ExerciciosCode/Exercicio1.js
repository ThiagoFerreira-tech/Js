// 1 -CRIE UMA FUNÇÃO QUE DADO DOIS VALORES ( PASSADOS COMO PARAMETRO) MOSTRE NO CONSOLE A SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISAO DESSES VALORES.

function soma(x, y) {
    return x + y
}
console.log(soma(2, 4))

function soma2(x, y) {
    return x * y
}
console.log(soma2(2, 4))

function soma3(x, y) {
    return x - y
}

console.log(soma3(2, 4))

function soma4(x, y){
    return x % y
}
console.log(soma4(2, 4))



//2 - Os triangulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados.
//Equilátero: Os tres lados sao iguais. Isosceles: Dois lados iguais. Escaleno: Todos os lados sao diferentes.
//Crie uma função que recebe os comprimentos dos três lados de um triangulo e retorne sua classificação quanto
//ao tamanho de seus lados.(Neste exemplo deve se abstrair as condiçoes matematicas de existencia de um triangulo)

//RESPOSTA:
function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado1 === lado3) {
        return "EQUILATERO";// todos os lados sao =
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        return "isósceles"; // dois lados sao =
    } else {
        return "Escaleno" // todos os lados sao ==
    }
}

console.log(classificarTriangulo(3, 3, 3)); // Equilátero
console.log(classificarTriangulo(3, 3, 5)); //Isóscele
console.log(classificarTriangulo(3, 4, 5)); //Escaleno

//03) - Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

//R:
function potencia (base, expoente) {
    return base ** expoente;
}
console.log(potencia(2, 3));
console.log(potencia(5, 2));
console.log(potencia(10, 0));

// Crie uma função que ira receber dois valores, o dividendo e o divisor. A função devera imprimir o resultado e o resto da divisão destes dois valores
function divisao(dividendo, divisor) {
    if (divisor === 0) {
        console.log("erro: Divisao por zero não é permitido");
        return;
     }
     let resultado = Math.floor(dividendo / divisor);
     let resto = dividendo % divisor;
     
     console.log(`Resultado: ${resultado}`);
     console.log
     
}
 
divisao(10 ,3);
divisao(15, 5); 

//05) - Lidar com numeros em javaScript pode dar muita dor de cabeça. Voce ja viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000004. Outra coisa...
//Importante de observar, é o fato que o ponto é utilizado no lugar da virgula e vice e versa. Com isso, vamos fazer um exercicio simples para mostrar dinheiro sempre da forma correta. Desenvolva um função JS para
//que ele receba um valor como 0.3000000000004 e retorne R$0,30(Observe a virgula e o ponto)

//R:

function formatarDinheiro(valor) {
    return `R$${valor.toFixed(2).replace('.',',')}`;
}

console.log(formatarDinheiro(0.3000000000004))
console.log(formatarDinheiro(10.5))
console.log(formatarDinheiro(1000))

//06) - Elabore duas funções que recebem três parametros: capital inicial, taxa de juros e tempo de aplicação. 
//A primeira função retornara o montante da aplicação financeira sob o regimen de juros simples e a segunda
//retornara o valor da aplicação sob o regime de juros composto


//R: // Função para calcular juros simples
function jurosSimples(capitalInicial, taxaJuros, tempo) {
    let montante = capitalInicial + (capitalInicial * taxaJuros * tempo);
    return montante.toFixed(2);
} 

// Função para calcular juros compostos0
function jurosCompostos(capitalInicial, taxaJuros, tempo) {
    let montante = capitalInicial * Math.pow((1 + taxaJuros), tempo);
    return montante.toFixed(2);
}

// Exemplo de uso
console.log("Juros Simples: R$" + jurosSimples(1000, 0.05, 3)); // R$1150,00
console.log("Juros Compostos: R$" + jurosCompostos(1000, 0.05, 3)); // R$1157,63    
