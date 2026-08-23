const args = process.argv.slice(2);

// console.log(args);

if (args.length === 0) {
  console.log("Please provide at least one choice");
} else {
  const choice = pickRandom(args);
  console.log(`🎯 ${choice.toUpperCase()}`);
}

function pickRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
