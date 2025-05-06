//Array 1
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {   // break age em cima do for
    if (x == 5) {  
        break // break nao age em cima de bloco If ( whilhe ou switch)
    }
    console.log(`${x} = ${nums[x]}`) // break interrompe quando chega no indice inidicado no if (x ==5)

}
for (y in nums) {
    if(y == 5) {
        continue  // Continue ele interrompe a repetição corrente do inidcado no "if(y == 5)" e continua pelo proximo
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: // NAO UTILIZAR  ROTULOS E ESSA ESTRUTURA POR SER DESORGANIZADO
for (let a in nums) {
  for(let b in nums){
    if(a == 2 && b == 3) break externo
    console.log(`Par =${a},${b}`)
  }
}