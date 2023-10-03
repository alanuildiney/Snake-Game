//Pegando os elementos e definido a área do jogo

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 7;
let tileCount = 20;
let tileSize = 18;
let headX = 10;
let headY = 10;

//Iniciar a velocidade da cobra
let xvelocity = 0;
let yvelocity = 0;


// Função do jogo
function drawGame() {
    clearScreen();
    drawSnake();

    setTimeout(drawGame, 1000/speed); //Atualiza a tela 7 vezes por segundo
}

//Cor de fundo
function clearScreen() {
    ctx.fillStyle = "black"; //Deixa o canvas com a cor preta
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight); // A cor preta preenchida desde o ponto 0,0 até o fim da lagura e altura
}

function drawSnake(){
    ctx.fillStyle = "orange";
    ctx.fillRect(headX*tileCount, headY*tileCount, tileSize, tileSize);
}

//Adcionar ouvinte de evento no body
document.body.addEventListener("Keydown", keyDown);

function keyDown(event){
    //Cima
    if(event.keycode == 38){
        yvelocity = -1 //move um bloco para cima
        xvelocity = 0;
    }

    //Baixo
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

function drawGame() {
    clearScreen();
}

function clearScreen() {
    ctx.fillStyle = 'black' //Deixa o canvas com a cor preta
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight) // A cor preta preenchida desde o ponto 0,0 até o fim da lagura e altura
}

drawGame()