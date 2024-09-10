//main board
let blockSize = 30;
let rows = 20;
let columns = 20;
let board;
let context;

//snake head
let snakeX = blockSize * 9;
let snakeY = blockSize * 9;

//snake speed
let speedX = 0;
let speedY = 0;

//snake body
let snakeBody = [];

// food
let foodX;
let foodY;

//display of gameOver
let gameOver = false;

//function for when page opens or refreshes.
window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = columns * blockSize;
  context = board.getContext("2d");

  placeFood();
  document.addEventListener("keydown", changeDirection);
  setInterval(update, 1000 / 10);
  document.addEventListener("keydown", playSong);
};

//function for changing the direction of snake.
function changeDirection(e) {
  if (e.code == "ArrowUp" && speedY != 1) {
    speedX = 0;
    speedY = -1;
  } else if (e.code == "ArrowDown" && speedY != -1) {
    speedX = 0;
    speedY = 1;
  } else if (e.code == "ArrowRight" && speedX != -1) {
    speedX = 1;
    speedY = 0;
  } else if (e.code == "ArrowLeft" && speedX != 1) {
    speedX = -1;
    speedY = 0;
  }
}

// styling the board , snake and food
function update() {
  if (gameOver) {
    return;
  }
  context.fillStyle = "white";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "rgb(207, 144, 220)";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  context.fillStyle = "rgb(159, 241, 255)";
  snakeX += speedX * blockSize;
  snakeY += speedY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

//conditions for gameOver.
  if (
    snakeX < 0 ||
    snakeX >= columns * blockSize ||
    snakeY < 0 ||
    snakeY >= rows * blockSize
  ) {
    gameOver = true;
    alert("Game Over!");
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      alert("Game Over!");
    }
  }
}

//function for placing the food in random places.
function placeFood() {
  foodX = Math.floor(Math.random() * columns) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

//function for playing song when spaceBar is pressed.
function playSong(e) {
  let pinkPantherImg = document.querySelector("#pinkPanther");
  if (e.code == "Space") {
    if (song.paused) {
      song.play(),
        ((document.body.style.animationName = "purple"),
        (document.body.style.animationDuration = "2s"),
        (document.body.style.animationIterationCount = "infinite"),
        (pinkPantherImg.style.display = "block"));
    } else {
      song.pause(),
        ((document.body.style.background = "pink"),
        (document.body.style.animation = "none"),
        (pinkPantherImg.style.display = "none"));
    }
  }
}
