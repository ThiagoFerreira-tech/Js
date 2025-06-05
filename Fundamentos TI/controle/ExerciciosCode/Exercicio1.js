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


/*  21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

function calcularPlanoDeSaude (idade) {
    const valorBase = 100
    let adicional = 0 ;

    if (idade < 10) {
        adicional = 80;
    } else if ( idade >= 10 && idade <= 30) {
        adicional = 50;
    } else if (idade > 30 && idade <= 60) {
        adicional = 95
    } else if (idade > 60) {
        adicional = 130
    } else{
        console.log("Idade Inválida.");
        return;
    }
    const valorTotal = valorBase + adicional;
    console.log(`Idade: ${idade} anos`);
    console.log(`Valor a ser pago: R$ ${valorTotal.toFixed(2)}`)
}
calcularPlanoDeSaude(15)
calcularPlanoDeSaude(29)
calcularPlanoDeSaude(35)
calcularPlanoDeSaude(150)


/* EX 2:*/

function calcularPreco (idade) {
    if(idade < 10) {
       return 180
    } else if (idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195 
    } else if (idade > 60) {
        return  230
    }
}

console.log(calcularPreco(8))



 /* 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */


function calcularMes (mes, valor) { 
 
let nomeMes;
switch (mes) {
    case 1: nomeMes = 'Janeiro';
    break
    case 2: nomeMes = 'Fevereiro'
    break
    case 3: nomeMes = 'Março'
    break
    case 4: nomeMes = 'Abril'
    break
    case 5: nomeMes =  'Maio'
    break
    case 6: nomeMes = 'Junho'
    break
    case 7: nomeMes = 'Julho'
    break
    case 8: nomeMes = 'Agosto'
    break
    case 9: nomeMes = 'Setembro'
    break
    case 10: nomeMes = 'Outubro'
    break
    case 11: nomeMes = 'Novembro'
    break
    case 12: nomeMes = 'Dezembro'
    default:
        return 'Mes Invalido, Insira Um Numero De 1 ao 12';
}

const taxaJuros = 0.05;
const MesesAtraso = mes - 1;
const valorFinal =valor * Math.pow(1 + taxaJuros, MesesAtraso)
return `Mes: ${nomeMes} (${mes})\nValor a ser pago: R$ ${valorFinal.toFixed(2)}`;

}

console.log(calcularMes(1, 1000))
console.log(calcularMes(13, 1500))
console.log(calcularMes(3, 1500))


/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */


function calcularNotaFinal(codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`codigo Do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5? 'Reprovação.': 'Aprovado.'}`) 
}

calcularNotaFinal(123, 2.8, 6, 3.5)
calcularNotaFinal(166, 7, 7.2, 0)
calcularNotaFinal(166, 9, 3, 2)


/* Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. */

let contador = 1;
 while (contador <= 11) {
    console.log('Hello World!') 
   contador++ 
 }
  


 // EX 2
 
 function helloWorld () {
    let i = 0
    while (i < 11) {
        console.log('Hello World!');
        i++
    }
 }

 helloWorld()



/* 26) Fazer um programa para encontrar todos os pares entre 1 e 100. */

function achaPares () {
    for (let i = 1; i <=100; i++)
        if (i%2==0)  {
            console.log(i)
        }
}

achaPares()



/* 7Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function calcularCrescimento (taxa1, altura1, taxa2, altura2) {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassara a criança 2 em 1 ano.'
        }else if (taxa1 < taxa2) {
            return 'A criança 2 ultrapassara a criança 1 em 1 ano.'
        }else {
            return 'As crianças tem igual altura e crescimento'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2) {
                return 'A criança menor nao ultrapassara a maior'
            } else {
                return `A criança menor ultrapassara a criança maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos`
            }
        } else {
            if(taxa2 >= taxa1) {
                return ' A criança menor não ultrapassara a maior'
            } else {
                return `A criança menor ultrapassara a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos`
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){ 
    let qtdAnos = 0
    while (alturaMenor <alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
   
  return qtdAnos
    
}

console.log(calcularCrescimento(150, 2, 146, 5))
console.log(calcularCrescimento(1.50, 2, 1.70, 3))
console.log(calcularCrescimento(1.63, 2, 1.72, 3))



/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

function calcularPares (vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++){
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        }else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} numeros pares e ${qtdImpares} numeros impares.`)
}
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
calcularPares(vetor)


/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
deles estão fora do intervalo, escrevendo estas informações. */


function observarIntervalo (vetor) {
    qtdNumerosNoIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            qtdNumerosNoIntervalo++
        }
}
return `${qtdNumerosNoIntervalo} Numeros dentro do intervalo`
}

vetor = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21]

console.log(observarIntervalo(vetor))

/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

function maiorMenor (vetor) {
    let maior 
    let menor
    
    for (let i = 0; i < vetor.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetor[i]    
            menor = vetor[i]
        } else {
          if  (vetor[i] > maior) {
            maior = vetor [i]
          }
        }
    }
    return [maior, menor]
}
vetor = [10, 5, 7, 0, 1, 7, 11, 20, 40, 9]

console.log(maiorMenor(vetor))

/*  31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console.  */

function numeroNegativos (vetor) {
    let qntdNegativos = 0
    for(i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qntdNegativos++
    }
}
return qntdNegativos
}
vetor = [10, 5, 6, 8, 100, 50, -9, -8, -6, -4]
console.log(numeroNegativos(vetor))

/* 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function valoresVetor (vetor) {
    let soma = 0
    for (let i = 0; i<vetor.length; i++) {
        soma += vetor[i]
    
    }
    return soma/vetor.length
}
vetor = [1, 2 ,3, 4, 5, 6, 7, 8, 9]
console.log(valoresVetor(vetor))

/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter 
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e 
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorInteiro =[1, 2, 3, 4, 5]
let vetorStrings =['Thiago', 'Maria', 'Gabi', 'Vinicius']
let vetorDec =[1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i ++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDec))
console.log(concatenar(vetorDec, vetorStrings))
