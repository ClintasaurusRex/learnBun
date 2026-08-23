# Project 1 Notes — Random Picker CLI

## Command-Line Arguments

Run a JavaScript file with Bun:

```bash
bun randomPicker.js pizza burgers sushi
```

Read terminal arguments:

```js
const args = process.argv;
```

`process.argv` is a **NODE-COMPATIBLE API**.

The first two entries are normally the runtime and script path.

Get only the user arguments:

```js
const args = process.argv.slice(2);
```

## `slice()`

**STANDARD JAVASCRIPT**

```js
const values = [10, 20, 30, 40];

console.log(values.slice(2));
```

Result:

```js
[30, 40]
```

`slice(2)` means:

> Start at index 2 and keep everything after it.

## Random Array Index

**STANDARD JAVASCRIPT**

```js
const randomIndex = Math.floor(Math.random() * array.length);
```

Breakdown:

```text
Math.random()
→ decimal from 0 up to but not including 1

* array.length
→ scales it to the array size

Math.floor()
→ removes the decimal
```

## Accessing an Array Item

```js
const item = array[randomIndex];
```

## Reusable Random Picker Function

```js
function pickRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
```

Usage:

```js
const choice = pickRandom(args);
```

A useful function should usually perform one clear job.

## Input Validation

Check input before processing it:

```js
if (args.length === 0) {
  console.log("Please provide at least one choice");
}
```

Useful program pattern:

```text
INPUT
  ↓
VALIDATE
  ↓
PROCESS
  ↓
OUTPUT
```

## Multi-Word Arguments

Without quotes:

```bash
bun randomPicker.js ice cream
```

JavaScript receives two arguments:

```js
["ice", "cream"]
```

With quotes:

```bash
bun randomPicker.js "ice cream"
```

JavaScript receives one argument:

```js
["ice cream"]
```

## Useful Mental Model

When building CLI tools, think:

```text
What did the user type?
        ↓
How do I get that into JavaScript?
        ↓
Is the input valid?
        ↓
What should my program do with it?
        ↓
What should the terminal display?
```

## APIs Learned

| Feature | Type |
|---|---|
| `process.argv` | Node-compatible API |
| `.slice()` | Standard JavaScript |
| `Math.random()` | Standard JavaScript |
| `Math.floor()` | Standard JavaScript |
| `.length` | Standard JavaScript |
| Array indexing | Standard JavaScript |
| `.toUpperCase()` | Standard JavaScript |

## Commands

Normal choices:

```bash
bun randomPicker.js pizza burgers sushi tacos
```

Multi-word choices:

```bash
bun randomPicker.js pizza "ice cream" tacos "chicken wings"
```

Validation test:

```bash
bun randomPicker.js
```
