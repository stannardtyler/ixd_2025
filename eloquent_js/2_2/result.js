let word = " ";

for (let i = 0; i < 8; i = i + 1) {
  for (let j = 0; j < 4; j++) {
    word = word + "#";
    word = word + " ";
  }
  word = word + "\n";
}

console.log(word);
