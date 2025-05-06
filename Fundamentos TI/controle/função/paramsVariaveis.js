function soma () {
    let soma = 0
    for (i in arguments) { // Arguments = possibilita pegar todos parametros que foram passado e fazer qualquer 
        soma += arguments [i]// tipo de operação nele como soma
    }
     return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 3.3, "Test"))
console.log(soma('a', 'b','c'))