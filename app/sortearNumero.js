const minorValue = 1
const biggerValue = 100
const secretNumber = gerarNumeroAleatório ()

function gerarNumeroAleatório() {
    return parseInt(Math.random() * biggerValue + 1)
}

const minorValueElement = document.getElementById("menor-valor")
const biggerValueElement = document.getElementById("maior-valor")

minorValueElement.innerHTML = minorValue
biggerValueElement.innerHTML = biggerValue