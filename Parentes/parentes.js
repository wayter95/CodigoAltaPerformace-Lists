const parentes;
const colchetes;
const chaves;
const texto = [];
const resultado;
const valida;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === '(') {
        if (parenteses.length === 0 && (
            (chaves.length === 0 && colchetes.length === 0) ||
            (chaves.length === 0 && colchetes.length === 1) ||
            (chaves.length === 1 && colchetes.length === 1)
        )) {
            parenteses.unshift(texto[i])
        }
        else {
            setValida(false)
            break
        }
    }
    else if (texto[i] === ')') {
        if (parenteses[0] === '(') {
            parenteses.shift()
        }
        else {
            setValida(false)
            break
        }
    }
    else if (texto[i] === '[') {
        if (colchetes.length === 0 && parenteses.length === 0) {
            colchetes.unshift(texto[i])
        }
        else {
            setValida(false)
            break
        }
    }
    else if (texto[i] === ']') {
        if (colchetes.length === 1 && parenteses.length === 0) {
            colchetes.shift()
        }
        else {
            valida = false
            break
        }
    }
    else if (texto[i] === '{') {
        if (chaves.length === 0 &&
            colchetes.length === 0 &&
            parenteses.length === 0) {
            chaves.unshift(texto[i])
        }
        else {
            valida = false
            break
        }
    }
    else if (texto[i] === '}') {
        if (chaves.length === 1 &&
            colchetes.length === 0 &&
            parenteses.length === 0) {
            console.log("certo")
            chaves.shift()
        }
        else {
            console.log("errado")
            setValida(!valida)
            console.log(valida)
            break
        }
    }

}

if (!chaves &&
    !colchetes &&
    !parentes &&
    valida) {
    resultado = 'Expressão Correta!'
} else {
    resultado = 'Expressão Incorreta!'
}

console.log("zerado")
console.log(chaves)
console.log(colchetes)
console.log(parenteses)
console.log(valida)
