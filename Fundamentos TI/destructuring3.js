function rand({ min = 0, max = 1000}) {                      // FUNÇÃO rand =retorna o valor aleatorio dentro de chaves
    const valor = Math.random() * ( max - min) + min
       return Math.floor(valor)
}
const obj = { max: 500, min: 400}
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))
console.log(rand({ min: 250}))


function rand({ min = 50, max = 1900}) {
        const valor = Math.random() * ( max - min ) + min
           return Math.floor(valor)
    }
const obj1 = { max: 1000, min: 50}
console.log(rand(obj1))
console.log(rand({ min: 10 }))
console.log(rand({}))
