console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome='Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function (){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)                 /// anotação ponto .xxxx é a forma de acessar os membros (Atributos, funções)
console.log(obj3.nome)               // presente em todas as linguagem
obj3.exec()



console.log(Math.PI)