function criarProduto(produto,preco) {
        return {
            produto,
            preco,
            desconto: 0.1
        }
}

console.log(criarProduto('Castração Femea', 1.991,99))
console.log(criarProduto('Filmadora', 11559.151))