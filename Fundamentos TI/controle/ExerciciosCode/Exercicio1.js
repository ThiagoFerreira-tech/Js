/* 1 -CRIE UMA FUNÇÃO QUE DADO DOIS VALORES ( PASSADOS COMO PARAMETRO) MOSTRE NO CONSOLE A SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISAO DESSES VALORES. */

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



/* 02 - Os triangulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados.
Equilátero: Os tres lados sao iguais. Isosceles: Dois lados iguais. Escaleno: Todos os lados sao diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triangulo e retorne sua classificação quanto
ao tamanho de seus lados.(Neste exemplo deve se abstrair as condiçoes matematicas de existencia de um triangulo) */

function classificarTriangulo(lado1, lado2, lado3){
 if ( lado1 === lado2  && lado2 === lado3 ) {
    return `Equilátero`;
 } else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){ 
    return `Isósceles`;
 } else {
    return `Escaleno`;
 } 

 }
 
 console.log(classificarTriangulo(3, 3, 3));
 console.log(classificarTriangulo(4, 4, 2));
 console.log(classificarTriangulo(3, 4, 5));

/* 03) - Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente */

function expoente (base, expoente){
    return base ** expoente
 }
 console.log(expoente(2, 3))
 console.log(expoente(6, 4))
 console.log(expoente(0, 10))




/* 04) Crie uma função que ira receber dois valores, o dividendo e o divisor. A função devera imprimir o resultado e o resto da divisão destes dois valores*/

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
// R cod3r:
function divisao (dividendo, divisor){
    console.log("Resultado:" + Math.floor (dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}
divisao(11, 4)

/* 05) - Lidar com numeros em javaScript pode dar muita dor de cabeça. Voce ja viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000004. Outra coisa...
Importante de observar, é o fato que o ponto é utilizado no lugar da virgula e vice e versa. Com isso, vamos fazer um exercicio simples para mostrar dinheiro sempre da forma correta. Desenvolva um função JS para
que ele receba um valor como 0.3000000000004 e retorne R$0,30(Observe a virgula e o ponto) */

function formatarDinheiro(valor) {
    return `R$${valor.toFixed(2).replace('.',',')}`;
}

console.log(formatarDinheiro(0.3000000000004))
console.log(formatarDinheiro(10.5))
console.log(formatarDinheiro(1000))

/* 06) - Elabore duas funções que recebem três parametros: capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornara o montante da aplicação financeira sob o regimen de juros simples e a segunda
retornara o valor da aplicação sob o regime de juros composto */


// Função para calcular juros simples
function jurosSimples(capitalInicial, taxaJuros, tempo) {
    let montante = capitalInicial + (capitalInicial * taxaJuros * tempo);
    return montante.toFixed(2);
} 

// Função para calcular juros compostos0
function jurosCompostos(capitalInicial, taxaJuros, tempo) {
    let montante = capitalInicial * Math.pow((1 + taxaJuros), tempo);
    return montante.toFixed(2);
}

console.log("Juros Simples: R$" + jurosSimples(1000, 0.05, 3)); // R$1150,00
console.log("Juros Compostos: R$" + jurosCompostos(1000, 0.05, 3)); // R$1157,63    

/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, 
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três 
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo 
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: 
“Delta é negativo”. */

function bhaskara (ax2, bx, c) {
    let resultado = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        return "Delta Negativo"
    }
    let x1 = (-bx + Math.sqrt(delta)) / (2* ax2)
    let x2 = (-bx - Math.sqrt(delta)) / (2* ax2)
    resultado.push(x1)
    resultado.push(x2)
    return resultado
}
console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))

/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém 
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o 
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um 
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior 
jogo. (Número do pior jogo). 
Obs.: O primeiro jogo não conta como novo recorde do melhor.  
Exemplo:  
String: “” 
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação 
aconteceu no sétimo jogo.)*/

let stringPontuacoes = "2, 10, 15, 25, 3, 0, 30, 1, 30, 50, 60"

function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(",")
    let QtdQuebraDeRecord = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

     for ( let i = 1; i < pontuacoes.length; i++)  {
       if (parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
         maiorPontuacao = pontuacoes [i]
         QtdQuebraDeRecord++
       } else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
        menorPontuacao = pontuacoes[i]
        piorJogo = i+1;
       }
    } return [QtdQuebraDeRecord, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))

/*  09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de 
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas 
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor 
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum 
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou 
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 
e o aluno será aprovado. */


function arrendodarNotas (notas) {
    return notas.map(nota => {
        if(nota < 38) {
            return nota;
        }
        const proximoMultiploDe5 = Math.ceil(nota / 5) * 5;
        const diferenca = proximoMultiploDe5 - nota;
        
        if (diferenca < 3) {
            return proximoMultiploDe5;
        }
        return nota
    })
}
const notasAlunos = [30, 35, 45, 80, 99, 65, 75, 50, 25, 86]
const notaFinal = arrendodarNotas(notasAlunos)

console.log(notaFinal)

 /* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
ou false. */

function verificasrNumeroInteiro (numero){
    if(numero % 3 == 0) {
     return true
    } else {
        return false
    }
}

console.log(verificasrNumeroInteiro(2))
console.log(verificasrNumeroInteiro(5))
console.log(verificasrNumeroInteiro(6))
console.log(verificasrNumeroInteiro(8))
console.log(verificasrNumeroInteiro(7))
console.log(verificasrNumeroInteiro(9))


/* EX 2*/

function eDivisivelPor3(numero) {
    return numero % 3 === 0;    
}

console.log(eDivisivelPor3(150
