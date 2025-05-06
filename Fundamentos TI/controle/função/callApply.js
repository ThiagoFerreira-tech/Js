function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 900.00,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(produto.getPreco())

//outra forma para executar essa funçao getPreco */

const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Diferença de Call e Apply é a forma de passar os parame
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$'])) // 1 parametro =contexto(carro,global,objeto) definido depois entre o array = [parametro para a função getPreco].

