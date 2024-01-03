let a = Math.floor(Math.random() * 1000)
let b = Math.floor(Math.random() * 1000)


function add(a, b) {
return a + b
}

function subtract(a, b){
return a - b
}

function divide(a ,b) {
return a / b
}

function multiply(a, b) {
    return a * b
}

function increment(n){
    n = n + 1
    return n

}

function decrement(n) {
    n -= 1
    return n
}

function makeInt(n) {
    return parseInt(n, 10)
}

function preserveDecimal(n) {
    return parseFloat(n)
}