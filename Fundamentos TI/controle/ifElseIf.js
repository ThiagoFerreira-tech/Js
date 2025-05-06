
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim 
} 
const imprimirResultado = function (nota) {   // IF SELECIONA UM SETENÇA DE CODIGOS
if (nota.entre(9, 10))   {                    // ELSE IF SELECIONA UMA SENTENÇA DE CODIGOS 
    console.log('Quadro de Honra')            //SE FOR VERDADEIRO OU OUTRO SE FOR FALSO A ESPRESSAO, PODENDO TER VARIAS CHAMADAS DE ELSE IF FORMANDO UM BLOCO DE CODIGO
} else if(nota.entre(7, 8.99)) { 
    console.log('Aprovado')
} else if(nota.entre(4, 6.99)) {
    console.log('Recuperação')
} else if(nota.entre(3, 0)) {
    console.log('Reprovado')
} else {
    console.log('Nota Invalida')
}

console.log('Fim')

}


imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(5)
imprimirResultado(2.3)
imprimirResultado(-1)