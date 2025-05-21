//Pegando os elementos e definido a área do jogo
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

class snakePart{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

let speed = 7;
let tileCount = 20;
let tileSize = 18;
let headX = 10;
let headY = 10;

//Matriz que define as partes
const snakeParts = [];
let tailLength = 2; //Parte inicial snake

//Velocidade início
let xvelocity = 0;
let yvelocity = 0;

//Exibe maçã no jogo
let appleX = 5;
let appleY = 5;

//Pontos
let score = 0;


// Função principal do jogo
function drawGame() {

    changeSnakePosition();
    //Lógica Game Over
    let result = isGameOver();
    if(result){ //Se o resultado for verdadeiro, pare as funções seguintes        
        return;
    }

    clearScreen();
    drawSnake();
    checkCollision();    
    drawApple();
    drawScore();

    setTimeout(drawGame, 1000/speed); //Atualiza a tela 7 vezes por segundo
}

//Função Game Over
function isGameOver(){
    let gameOver = false; 
    
    //Verifica se o jogo começou
    if(yvelocity ===0 && xvelocity ===0){
        return false;
    }

    if(headX < 0){ //Se a cobra atingir a parede esquerda
        gameOver = true;
    }

    else if(headX === tileCount){ //Se a cobra atingir a parede da direita
        gameOver = true;
    }

    else if(headY < 0){ //Se a cobra atingir a parte superior
        gameOver = true;
    }

    else if(headY===tileCount){ //Se a cobra atingir a parte inferior
        gameOver = true;
    }

    //Parar quando a cobrar encostar em si mesma
    for(let i=0; i<snakeParts.length; i++){
        let part = snakeParts[i];
        if(part.x === headX && part.y === headY){
            gameOver = true;
            break;
        }        
    }

    //Texto na trela
    if(gameOver){
        ctx.fillStyle="white";
        ctx.font="50px verdana";
        ctx.fillText("GAME OVER", canvas.clientWidth/6.5, canvas.clientHeight/2);
    }

    return gameOver;
}

//Função dos pontos
function drawScore(){
    ctx.fillStyle = "white";
    ctx.font = "13px verdana";
    ctx.fillText("Score: " +score, canvas.clientWidth-77,15); //posicionar pontos no canto direito
}

//Cor de fundo
function clearScreen() {
    ctx.fillStyle = "black"; //Deixa o canvas com a cor preta
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight); // A cor preta preenchida desde o ponto 0,0 até o fim da lagura e altura
}

function drawSnake(){

    ctx.fillStyle = "green";
   
    //Percorre a matriz de partes da cobra   
    for(let i = 0; i<snakeParts.length; i++){
        
        //Desenha as partes da cobra
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }

    snakeParts.push(new snakePart(headX, headY)); //Coloca o item no final
    if(snakeParts.length>tailLength){
        snakeParts.shift();
    } 

    ctx.fillStyle = "orange";
    ctx.fillRect(headX*tileCount, headY*tileCount, tileSize, tileSize);
}

function changeSnakePosition(){
    headX = headX + xvelocity;
    headY = headY + yvelocity;
}

function drawApple(){
    ctx.fillStyle = "red";
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize); //Posição da maçã dentro da contagem de bloco
}

//Checa o contato da cobra com a maçã
function checkCollision(){
    if(appleX == headX && appleY==headY){

        appleX = Math.floor(Math.random() * tileCount); //Gera a maçã na posição vertical
        appleY = Math.floor(Math.random() * tileCount); //Gera a maçã na posição horizontal
        tailLength++; //incrementa o tamanho
        score++; //incrementa a pontuação
    }
}

//Adicionar o ouvinte de evento no body
document.body.addEventListener('keydown', keyDown);

function keyDown(){

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
        yvelocity = 1; //move um bloco para baixo
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
drawGame();
