const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa) // Bind passa a definir o this sempre para pessoa sem alterar outras funçoes
 falarDePessoa()