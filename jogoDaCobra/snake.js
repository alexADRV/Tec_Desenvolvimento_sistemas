const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const box = 20;
const canvasSize = 400;
let score = 0;

let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box
};

let food = {
  x: Math.floor(Math.random() * (canvasSize / box)) * box,
  y: Math.floor(Math.random() * (canvasSize / box)) * box
};

let direction;

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

function draw() {
  ctx.clearRect(0, 0, canvasSize, canvasSize);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "#0f0" : "#0a0";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  let headX = snake[0].x;
  let headY = snake[0].y;

  if (direction === "LEFT") headX -= box;
  if (direction === "UP") headY -= box;
  if (direction === "RIGHT") headX += box;
  if (direction === "DOWN") headY += box;

  if (headX === food.x && headY === food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * (canvasSize / box)) * box,
      y: Math.floor(Math.random() * (canvasSize / box)) * box
    };
  } else {
    snake.pop();
  }

  const newHead = {
    x: headX,
    y: headY
  };

  if (
    headX < 0 || headX >= canvasSize ||
    headY < 0 || headY >= canvasSize ||
    collision(newHead, snake)
  ) {
    clearInterval(game);
    alert("Game Over! Pontuação: " + score);
  }

  snake.unshift(newHead);
}

function collision(head, array) {
  return array.some(segment => head.x === segment.x && head.y === segment.y);
}

const game = setInterval(draw, 100);
