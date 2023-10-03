const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

function drawGame() {
    clearScreen();
}

function clearScreen() {
    ctx.fillStyle = 'black' //Deixa o canvas com a cor preta
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight) // A cor preta preenchida desde o ponto 0,0 até o fim da lagura e altura
    

}

