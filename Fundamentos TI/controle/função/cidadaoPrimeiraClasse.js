//Função em JS é First-Class Object (Citizens)
// Higher-oder function

//criar de forma literal
function fun1() { }

// Armazenar em uma variavel;
const fun2 = function () { }

// Armazenar função em um Array
const array = [function (a,b){ return a + b }, fun1,fun2]
console.log(array[0](2, 3))

//Armazenamento  de função em um atributo de objeto;
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())    // para invocar a função ()

//Passar função com parametro
function run(fun) { 
    fun ()
}
run(function(){ console.log('Executando...')})

// Uma função  pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
       console.log(a + b + c)
       
    }
}
soma(2, 3)(4) // Possibilidade 1
const cincoMais=soma (2, 3)  // Possibilidade 2
cincoMais(4)