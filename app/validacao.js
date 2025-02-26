function guessIsRight(guess) {
    const number = +guess

    if (invalidGuess(number)) {
        guessElement.innerHTML += '<div> Valor inválido </div>'
        return
    }

    if (guessMinorOrBigger (number)) {
        guessElement.innerHTML += `<div> Valor inválido: o número precisa 
        estar entre ${minorValue} e ${biggerValue} </div>`
        return
    }

    if (number === secretNumber) {
        document.body.innerHTML = `<h2> Você acertou! </h2>
        <h3> o número secreto era ${secretNumber}`
    }   
    else if (number > secretNumber) {
        guessElement.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        guessElement.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function invalidGuess (number) {
    return Number.isNaN(number)
}

function guessMinorOrBigger (number) {
    return number > biggerValue || number < minorValue 
}