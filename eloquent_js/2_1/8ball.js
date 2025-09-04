let fortune;

fortune = eightBall(2);

if (fortune > 0) {
  console.log("yes");
} else {
  console.log("no");
}

function eightBall(max) {
  return Math.floor(Math.random() * max);
}
