// For In pode ser feita em cima de um objeto ou  em uma array//
//  existem outras formas mais interessantes para se percorrer uma array (for et, map, reduce, filter);
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]  // For In Percorre pelos indices nao pelos valores

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {   // Tambem consegue pegar atributos de um objeto
    nome: 'Maria',
    sobrenome:'Camargo',
    idade: 29,
    peso: 64
}
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]} `)
}



const nates = [5.5, 7.7, 8.9, 6.3, 2.5]                
for(let u in nates) {     // Utilizar sempre o "Let "
    console.log(u, nates[u])
}