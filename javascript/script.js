//Pegando os elementos e definido a área do jogo

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 7;
let tileCount = 20;
let tileSize = 18;
let headX = 10;
let headY = 10;

class snakePart{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

//Exibir maçã no jogo
let appleX = 5;
let appleY = 5; 

//Iniciar a velocidade da cobra
let xvelocity = 0;
let yvelocity = 0;

//Matriz que define as partes da cobra
const snakeParts =[];
let tailLength = 2; //Parte inicial da cobra


// Função principal do jogo
function drawGame() {
    clearScreen();
    drawSnake();
    changeSnakePosition();
    drawApple();

    setTimeout(drawGame, 1000/speed); //Atualiza a tela 7 vezes por segundo
}

//Cor de fundo
function clearScreen() {
    ctx.fillStyle = "black"; //Deixa o canvas com a cor preta
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight); // A cor preta preenchida desde o ponto 0,0 até o fim da lagura e altura
}

function drawSnake(){
    ctx.fillStyle = "green";

    //Percorre a matriz de partes da cobra
    for(let i = 0;i<snakeParts.length;i++){
        //Desenha as partes da cobra
        let part = snakeParts[i]
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize)
    }

    snakeParts.push(new snakePart(headX, headY)); //Coloca o item no final

    ctx.fillStyle = "orange";
    ctx.fillRect(headX*tileCount, headY*tileCount, tileSize, tileSize);
}

function drawApple(){
    ctx.fillStyle = "red";
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize); //Posição da maçã dentro da contagem de bloco
}

function changeSnakePosition(){
    headX = headX + xvelocity;
    headY = headY + yvelocity;
}

function checkCollision(){
    if(appleX == headX && appleY == headY){ //Colisão da maçã com a cobra
        appleX = Math.floor(Math.random() * tileCount); //Gera a maçã na posição vertical
        appleY = Math.floor(Math.random() * tileCount); //Gera a maçã na posição horizontal
    }

}


















//Adcionar o ouvinte de evento no body
document.body.addEventListener("Keydown", keyDown);

function keyDown(event){

    //Cima
    if(event.keyCode == 38){
        if(yvelocity == 1)
        return; // impede de a cobra se mova para o lado contrário
        yvelocity = -1 //move um bloco para cima
        xvelocity = 0;
    }

    //Baixo
    if(event.keyCode == 40){
        if(yvelocity == -1)
        return; // impede que a cobra se mova no sentido inverso
        yvelocity = 1; //move u, bloco para baixo
        xvelocity = 0;
    }

    //esquerda
    if(event.keyCode == 37){
        if(xvelocity == 1)
        return; // impede que se mova no sentido contrário
        yvelocity = 0;
        xvelocity = -1; //move um bloco para a esquerda
    }

    //direita
    if(event.keyCode == 39){
        if(xvelocity == -1)
        return; // impede que a cobra mova no sentido oposto
        yvelocity = 0;
        xvelocity = 1; //move um bloco para a direita
    }

}

drawGame()