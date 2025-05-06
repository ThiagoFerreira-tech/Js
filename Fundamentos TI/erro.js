function tratarErroELancar(erro){
    //throw new Error('....')
    //throw 10
    throw { 
        nome: error
    }
}

function ImprimirNomeGritando(obj) {
    try {                                        // try = bloco de codigo que voce julga que pode gerar algum erro
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {                                //catch= qualquer erro que estiver no codigo aparecera para se tratar
       tratarErroELancar (e)
    } finally {                      //finally sera executado mesmo o try dando erro ou catch

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        console.log('Final')
    }
       
}
const obj = { name: 'Roberta'}
ImprimirNomeGritando(obj)
