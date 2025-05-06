let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)  // utilizando Bind para comparar com o obj
comparaComThis(global)
comparaComThis(obj)

let  ComparaComThisArrow = param => console.log(this === param)
ComparaComThisArrow(global)
ComparaComThisArrow(module.exports)