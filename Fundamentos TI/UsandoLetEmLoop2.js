const funcs = []

for(let i = 0; i < 10; i++) {    // por usar let neste scopo a funçao consegue memorizar o valor passado pela funçao criada
funcs.push(function(){
    console.log(i)
})

}

funcs[2]()
funcs[6]()
funcs[5]()