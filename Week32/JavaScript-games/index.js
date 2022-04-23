const canvas = document.querySelector('canvas'); 
canvas.width = 800; 
canvas.height = 400; 
const ctx = canvas.getContext('2d'); 
const paddleWidth = 8; 
const paddleHeight = 80; 
let playerScore = 0; 
let computerScore = 0; 
let ballX = canvas.width / 2; 
let ballY = canvas.height / 2; 
let playerPosition = canvas.height / 2; 
let computerPosition = canvas.height / 2; 
let moveX; 
let moveY; 
let ballRadius = 10; 
const winningTotal = 3; 
let gameLoop;
let gameRunning = false;

ctx.fillStyle = 'white'; 
ctx.font = '30px Helvetica'; 
ctx.textAlign = 'center'; 
ctx.fillText('Press space to play!', canvas.width / 2, canvas.height / 2); 

document.addEventListener('keydown', handleKeyPressed); 

function handleKeyPressed(e) {
    switch(e.code) {
        case 'Space': 
            gameStart(); 
            break;
        case 'ArrowUp':
            if (playerPosition - paddleHeight /2 <= 0) {
                return;
            }
            playerPosition -= 15; 
            break; 
        case 'ArrowDown':
            if (playerPosition + paddleHeight /2 >= canvas.height) {
                return;
            }
            playerPosition += 15; 
            break; 
        
    }
}
function randomMovement() {
    const randomX = Math.ceil(Math.random() * 3) + 1;
    const randomY = Math.round(Math.random() * 3);
    const plusOrMinusX = Math.random() < 0.5 ? "-" : "+";
    const plusOrMinusY = Math.random() < 0.5 ? "-" : "+";
    const randomNumber = Math.random(); 
    moveX = Number(plusOrMinusX + randomX) + randomNumber;
    moveY = Number(plusOrMinusY + randomY) + randomNumber;
}


function gameStart() {
    if (gameRunning) {
        return; // don't restart the game if it is running;
    }
    gameRunning = true;
    randomMovement(); 
    ballX = canvas.width / 2; 
    ballY = canvas.height / 2; 
    playerScore = 0; 
    computerScore = 0; 
    clearInterval(gameLoop); 
    gameLoop = setInterval(loop, 15); 
}

// draw rect/square
function drawPlayerPaddle() {
    ctx.beginPath(); 
    ctx.fillStyle = 'red'; 
    ctx.fillRect(0,
                playerPosition - (paddleHeight/2), 
                paddleWidth, 
                paddleHeight);     
}

function drawComputerPaddle() {
    ctx.fillStyle = 'blue'; 
    ctx.fillRect(canvas.width - paddleWidth,
                computerPosition-(paddleHeight/2), 
                paddleWidth, 
                paddleHeight); 
}

// draw ball
function drawBall() {
    ctx.beginPath(); 
    ctx.fillStyle = 'gray'; 
    ctx.arc(ballX, 
            ballY,
            ballRadius, 
            0, 
            2*Math.PI); 
    ctx.fill(); 
    ballX += moveX; 
    ballY += moveY; 
}


// Add text
function drawScore() {
    ctx.fillStyle = 'red'; 
    ctx.font = '30px Helvetica'
    ctx.fillText(playerScore, canvas.width / 4, 50); 
    ctx.fillText(computerScore, canvas.width / 4 * 3, 50); 
}

function drawCanvas() {
    ctx.beginPath(); //create a new draw section (clear above formats)
    ctx.setLineDash([6]); //dash size, space, dash size, space, etc... 
    ctx.moveTo(canvas.width / 2, 0); //start position of line
    ctx.lineTo(canvas.width / 2, canvas.height); //end position of line
    ctx.stroke(); 
    
    ctx.beginPath(); 
    ctx.arc(canvas.width / 2,
            canvas.height / 2, 
            20, 
            0, 
            2*Math.PI); 
    ctx.stroke(); 
}


function collide() {
    
    
    //bounce off the top and bottom
    if (ballY > canvas.height - ballRadius || ballY - ballRadius <= 0) {
        moveY = -moveY + generateRandomBounce(); 
    }

    // check for score x axis (both side)
    if (ballX <= ballRadius) {
        score('computer'); 
    } else if (ballX + ballRadius >= canvas.width) {
        score('player'); 
    }

    // check player paddle contact
    if (ballX <= ballRadius + paddleWidth 
            && Math.abs(ballY - playerPosition) <= paddleHeight / 2 + ballRadius) {
            
        console.log(moveX);
        moveX = -moveX + generateRandomBounce();
        console.log(moveX);

        //add slight change in Y
        moveY = moveY + generateRandomBounce(); 
    }

    // check computer paddle contact
    if (ballX + ballRadius >= canvas.width - paddleWidth 
        && Math.abs(ballY - computerPosition) <= paddleHeight / 2 + ballRadius) {
        moveX = -moveX + generateRandomBounce();
        //add slight change in Y
        moveY = moveY + generateRandomBounce(); 
    }
}


function score(player) {
    if (player === 'computer') {
        computerScore++; 
    } else {
        playerScore++;
    }

    // check if score is equal to winning total
    if (computerScore === winningTotal) {
        endGame('computer');
        return; 
    } else if (playerScore === winningTotal) {
        endGame('player'); 
        return; 
    }

    //reset ball location
    ballX = canvas.width / 2; 
    ballY = canvas.height / 2; 
}

function endGame(winner) {
    gameRunning = false; 
    clearInterval(gameLoop); 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    drawScore(); 

    if (winner === 'computer') {
        ctx.fillStyle = 'blue';
    } else {
        ctx.fillStyle = 'red'; 
    }
    ctx.textAlign = 'center'; 
    ctx.fillText(`The winner is: ${winner}`, 
                    canvas.width / 2, 
                    canvas.height / 2);
}

function moveComputer() {
    if (computerPosition < ballY) {
        computerPosition++; // should make this better
    } else {
        computerPosition--; //should make this better 
    }
    
}

function generateRandomBounce() {
    const number0to1 = Math.floor(Math.random() * 2)
    const positiveOrNegative = number0to1 === 0 ? "-" : "+"; 
    return Number(positiveOrNegative + Math.random() / 2);
}   


// a function to redraw graphics after x seconds
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    drawPlayerPaddle(); 
    drawComputerPaddle(); 
    drawScore(); 
    drawCanvas(); 
    drawBall(); // this was second in the list but it was going under the game lines
    collide(); 
    moveComputer(); 
}


