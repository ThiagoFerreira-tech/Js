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

console.log(eDivisivelPor3(150)


/* 11)  As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando  true ou false.  */

function calcularAnoBissexto (ano) {
    if (ano <= 0) {
        return false
    } else if (ano % 400 == 0) {
        return true 
    } else if (ano % 100 == 0) {
        return false  
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(2022))
console.log(calcularAnoBissexto(205))
console.log(calcularAnoBissexto(2404))
console.log(calcularAnoBissexto(2104))


/* 13)Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.  */

function diasDaSemana(dias) {
    switch (dias)  {
        case 1:
        case 7:
        console.log('Fim de Semana')
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        console.log('Dia Útil')
            break
            default:
        console.log('Dia Inválido');
    }
}

diasDaSemana(2)
diasDaSemana(8)
diasDaSemana(7)
diasDaSemana(1)
diasDaSemana(5)


/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três 
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com 
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie 
também um default, que retornará uma mensagem de erro no console.  */


function venderFrutas(frutas) {
    switch (frutas)  {
        case 'Maça':
        console.log('Não Vendemos esta fruta aqui.')
        break
        case 'Kiwi':
        console.log('Estamos com escassez de kiwis')
        break
        case 'Melancia':
        console.log('Aqui esta, são 3 reais o quilo')
        break
        default :
        console.log('Não Temos Esta Fruta Para Venda, Sentimos Muito')
        break 
        case 'Alcatra':
        console.log('Isso nao é fruta')
        break
       
    }
    
}

venderFrutas('Maça')
venderFrutas('Kiwi')
venderFrutas('Melancia')
venderFrutas('Uva')
venderFrutas('Mamão')
venderFrutas('Alcatra')


/* 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda 
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o 
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza 
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: 
“Não trabalhamos com este tipo de automóvel aqui”. */

function escolhaCarro (modelo) {
    switch (modelo) {
        case 'Hatch':
            console.log('Compra efetuada com sucesso')
        break
        case 'Sedans':
            console.log('Tem certeza que não prefere esrte modelo?')
        break
        case 'Motocicletas':
            console.log('Tem certeza que não prefere este modelo?')
        break
        case 'Caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
        break
        default:
        console.log('Não trabalhamos com este tipo de automovel aqui')
        
    

    }
}

escolhaCarro('Hatch')
escolhaCarro('Sedans')
escolhaCarro('Motocicletas')
escolhaCarro('Caminhonetes')
escolhaCarro('Barcos')
escolhaCarro('Bicicleta')
escolhaCarro('Caminhão')


/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe 
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas. */

function calculadora (valor1, operacao, valor2)  {
    switch  (operacao) {
    case '+':
        return valor1 + valor2
    case '-':
        return valor1 - valor2
    case '*':
        return valor1 * valor2
    case '/':
        return valor1 / valor2
    default:
        return 'Operação Inválida'
    }
}

console.log(calculadora(2, '+', 3))
console.log(calculadora(3, '*', 3))
console.log(calculadora(100, '-', 50 ))
console.log(calculadora(50, '/', 100))
console.log(calculadora(4, 'x', 4))


/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano Aumento 
A 10% 
B 15% 
C 20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A' :
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.5
        case 'C': 
            return salarioAtual * 2.0
        default:
            return 'Plano inválido'

    }
 }
 
console.log(calcularReajuste('A', 1000))
console.log(calcularReajuste('B', 1000))
console.log(calcularReajuste('C', 1000))
console.log(calcularReajuste('D', 1000))
console.log(calcularReajuste('E', 1000))

/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
switch. Crie um case default que escreva ‘Número fora do intervalo.’  */

function leitor(numero) {
    switch (numero) {
    case 0:
    console.log('Zero')    
        break
    case  1:
    console.log('Um')
        break
    case 2:
    console.log('Dois')
        break
    case 3:
    console.log('Três')
        break
    case 4:
     console.log('Quatro')
        break
    case 5:
    console.log('Cinco')
        break
    case 6:
    console.log('Seis')
    break
    case 7:
    console.log('Sete')
        break
    case 8:
    console.log('Oito')
        break
    case 9: 
    console.log('Nove')
        break
    case 10:
    console.log('Dez')
default:
    console.log('Numero Inválido')

    }

}
leitor(0)
leitor(1)
leitor(2)
leitor(3)
leitor(4)
leitor(5)
leitor(6)
leitor(7)
leitor(8)
leitor(9)
leitor(10)
leitor(11)
leitor(12)


/* 19) O cardápio de uma lanchonete é o seguinte: 
Código 
Descrição do Produto 
Preço 
100 
Cachorro Quente 
R$ 3,00 
200 
Hambúrguer Simples 
R$ 4,00 
300 
Cheeseburguer 
R$ 5,50 
400 
Bauru 
R$ 7,50 
500 
Refrigerante 
R$ 3,50 
600 
Suco 
R$ 2,80 
Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente. */

function parametro (produto, quantidade) {
    switch (produto) {
        case 100:
        return quantidade * 3
        break
        case 200:
        return quantidade * 4
        break
        case 300:
        return quantidade * 5.5
        break
        case 400:
        return quantidade * 7.5
        break
        case 500:
        return quantidade * 3.5
        break
        case 600:
        return quantidade * 2.8
        break
        default: 
        return 'Produto não existente'

        
    }
}

console.log(parametro(100, 2))
console.log(parametro(200, 2))
console.log(parametro(300, 2))
console.log(parametro(400, 2))
console.log(parametro(500, 2))
console.log(parametro(600, 2))
console.log(parametro(700, 2))


