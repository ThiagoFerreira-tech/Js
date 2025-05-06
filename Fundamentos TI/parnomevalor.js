//par  nome   /    valor

const saudacao = 'Opa'  //Contexto léxico 1 = local onde sua variavel foi definida fisicamente no código

function exec() {
    const saudacao = 'Falaaaaa' // contexto léxico 2
    return saudacao                   
}
                                                     //Objetos sao grupos aninhados em pares nome/valor


const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)

console.log(exec())

console.log(cliente)