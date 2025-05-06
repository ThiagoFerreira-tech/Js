// Novo recurso do ES2015  //Dessestruturação = Retirar informaçoes desejadas das estruturas utilizando const { xxx, xxx ,xxx}
                                                                                                     // console.log( xxx, xxx, xxx)
const pessoa = {
     nome: 'Ana',
     idade: 5,
     endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
     }
    }

    const { nome, idade } = pessoa
    console.log(nome, idade)

    const { nome: n, idade: i } = pessoa
    console.log(n, i)

    const{ sobrenome, bemHumarada = true} = pessoa 
    console.log(sobrenome, bemHumarada)

    const { endereco:{ logradouro, numero, cep}} = pessoa // só da para desestruturar o que esta definidos*//*//////[ççkh]
    console.log(logradouro, numero , cep)   

   