console.log(typeof Object)  // FUNÇÃO
console.log(typeof new Object) // NEW FUNÇÃO- RECEBE OBJETO

const Cliente = function () {} // CRIAR PROPRIA FUNÇÃO
console.log(typeof Cliente) 
console.log(typeof new Cliente) // INSTANCIEI MINHA PROPRIA FUNÇÃO

class Produto{} // ES 2015 (ES6)

console.log(typeof Produto) // CRIA UMA CLASSE QUE INTERNAMENTE E UMA FUNÇAO (INSTANCIA)
console.log(typeof new Produto()) // INSTANCIANDO A CLASSE TEM UM OBJETO
