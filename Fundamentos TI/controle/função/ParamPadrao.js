// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1           // caso nao tenha nada registrado ele vai operar com o segundo operando caso o primeiro
    b = b || 1           //seja falso ( || = OU ), pode gerar alguns efeitos colaterais com calculos utilizando o 0
    c = c || 1            // 
    return a + b + c
}
console.log(soma1('sug'), soma1(5, 3), soma1('gay',4 , 6, 7) )

//
function soma6(a) {
    a = a || 1
    b = a || 1
    return a + b
}
console.log(soma6('ESPAÇO !!!'))                       

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1  // SE A FOR ESTRITAMENTE DIFERENTE DE UNDEFINED   ? = '? = operador ternario'  ELE VAI PEGAR O PROPRIO VALOR DE A, CASO EU NAO TENHA PASSADO O VALOR DE a ELE ASSUMIRA O VALOR DE 1 ( a : 1);
    b = 1 in arguments ? b : // DENTRO DE ARGUMENTS EXISTE O INDICE 1 ( INDICE 1 SERIA O b,SE EXISTIR PEGUE O VALOR DE B SE NAO PEGA O VALOR DE 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//
function soma7(a) {
    a = a || 1
    b = a || 1
    return a + b
}
console.log(soma7('ESPAÇO !!!'))     

//valor padrão do es2015, forma mais adequada e mais facil para gerar um valor padrao
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))