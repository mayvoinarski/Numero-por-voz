function guessIsRight(guess) {
    const number = +guess

    if (invalidGuess(number)) {
        if (guess.toUpperCase() === "GAME OVER" || guess.toUpperCase() === "FIM DE JOGO") {
            document.body.innerHTML = `
            <h2><b> Game Over! </b><h2>
            <h3><b>Pressione o botão para jogar novamente </b><h3>
            <button id="play-again" class="btn-play"> Jogar novamente </button>
            `

            document.body.style.backgroundColor = "#f50c1c"
        } else {
            guessElement.innerHTML += '<div> Valor inválido </div>'
            return
        }
    }

    if (guessMinorOrBigger (number)) {
        guessElement.innerHTML += `<div> Valor inválido: o número precisa 
        estar entre ${minorValue} e ${biggerValue} </div>`
        return
    }


    if (number === secretNumber) {
        document.body.innerHTML = `<h2> Você acertou! </h2>
        <h3> o número secreto era ${secretNumber} <h3>
        <button id="play-again" class="btn-play"> Jogar novamente </button>
        `
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

document.body.addEventListener('click', e => {
    if (e.target.id == "play-again") {
        window.location.reload()
    }
})