const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snake = [{x: 10, y: 10}];
let food = {x: 15, y: 15};
let dx = 1, dy = 0;

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "lime";
  snake.forEach(s => ctx.fillRect(s.x*20, s.y*20, 20, 20));

  ctx.fillStyle = "red";
  ctx.fillRect(food.x*20, food.y*20, 20, 20);
}

setInterval(draw, 100);
