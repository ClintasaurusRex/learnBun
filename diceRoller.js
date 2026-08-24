const args = process.argv.slice(2);
const count = Number(args[1] ?? 1); // This says if this does not exist make it 1
const sides = Number(args[0]);

if (Number.isNaN(sides) || !Number.isInteger(sides) || sides < 2) {
  console.log("Please provide a valid number of sides.");
} else if (Number.isNaN(count) || !Number.isInteger(count) || count < 1) {
  console.log("Please provide a valid roll count.");
} else {
  for (let i = 0; i < count; i++) {
    const roll = Math.floor(Math.random() * sides) + 1;
    console.log(`🎲 You rolled ${roll}/${sides}`);
  }
}

// console.log(typeof sides);
