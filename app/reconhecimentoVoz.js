const guessElement = document.getElementById('chute')
window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition ();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak (e) {
    guess = e.results[0][0].transcript
    showGuess(guess)
    guessIsRight(guess)
}

function showGuess (guess) {
    guessElement.innerHTML = `
        <div> Você disse </div>
        <span class="box"> ${guess}<span>
    `
}

recognition.addEventListener('end', () => recognition.start())