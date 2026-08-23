# Project 1 — Random Picker CLI

## What We Built

A small command-line tool that accepts choices from the terminal and randomly picks one.

Example:

```bash
bun randomPicker.js pizza burgers sushi tacos
```

Possible output:

```text
🎯 SUSHI
```

It also supports multi-word choices:

```bash
bun randomPicker.js pizza "ice cream" tacos "chicken wings"
```

And safely handles missing input:

```bash
bun randomPicker.js
```

Output:

```text
Please provide at least one choice
```

## Final Program

```js
const args = process.argv.slice(2);

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
```

## Concepts Practiced

- Reading command-line arguments
- `process.argv`
- Removing runtime/script arguments with `slice(2)`
- Random numbers with `Math.random()`
- Whole-number indexes with `Math.floor()`
- Using `array.length`
- Accessing array items by index
- Input validation
- Returning values from functions
- Separating reusable logic into a function
- Formatting terminal output
- Passing multi-word terminal arguments with quotes

## Runtime / API Labels

### NODE-COMPATIBLE API

```js
process.argv
```

Bun supports Node's `process.argv`, so this knowledge also transfers to Node.js programs.

### STANDARD JAVASCRIPT

These are normal JavaScript features:

```js
Array.prototype.slice()
Math.random()
Math.floor()
array.length
array[index]
function
return
if / else
String.prototype.toUpperCase()
```

## Program Flow

```text
terminal arguments
       ↓
process.argv
       ↓
slice(2)
       ↓
choices array
       ↓
validate input
    ↙       ↘
 empty     choices exist
   ↓            ↓
message     pickRandom()
                ↓
           random choice
                ↓
          uppercase output
```

## Main Tool-Building Lesson

A useful command-line tool can be very small.

This project is only a few lines of JavaScript, but it:

1. Receives information from the computer.
2. Validates that information.
3. Processes it.
4. Produces a useful result.

That basic pattern will appear repeatedly in future tools.
