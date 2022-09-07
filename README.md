# js.closure-aufgaben

# CLOSURE AUFGABEN

​
​

## AUFGABE 1

Schreiben Sie eine Funktion mit dem Namen specialMultiply, die zwei Parameter annimmt. Wenn der Funktion beide Parameter übergeben werden, sollte sie das Produkt der beiden Parameter zurückgeben. Wenn der Funktion nur ein Parameter übergeben wird, soll sie eine Funktion zurückgeben, der später ein weiterer Parameter übergeben werden kann, um das Produkt zurückzugeben. Um dies zu lösen, müssen Sie Closure und Argumente verwenden.
​

### Beispiele:

​

```js
specialMultiply(3, 4); // 12
specialMultiply(3)(4); // 12
specialMultiply(3); // function(){}....
```

​

## AUFGABE 2

​
Schreibe eine Funktion guessingGame welche einen Parameter amount erhält. Die Funktion sollte eine weitere Funktion (Closure) returnen welche einen Parameter guess annimmt.
​
Erstelle eine variable mit dem namen answer in der äußeren Funktion. Der wert der Variable sollte eine Zufallszahl zwischen 1 und 10 sein.
​
Erstelle außerdem eine variable guesses in der äußeren Funktion welche zuerst den Wert 0 hat.
​
Wenn die innere Funktion einen parameter guess erhält der gleich der Variable answer ist, returne "You got it!"
​
Wenn der guess zu hoch ist returne "Your guess is too high!"
​
Und wenn der guess zu niedrig ist "Your guess is too low!".
​
Die Closure sollte user daran hindern weiter zu raten wenn die Anzahl an Ratevorgängen größer ist als der initiale amount der maximal zulässig ist.
​
​

### Beispiele:

​

```js
const game = guessingGame(5)
game(1) // "You're too low!"
game(8) // "You're too high!"
game(5) // "You're too low!"
game(7) // "You got it!"
game(1) // "You are all done playing!"
​
const game2 = guessingGame(3)
game2(5) // "You're too low!"
game2(3) // "You're too low!"
game2(1) // "No more guesses the answer was 0"
game2(1) // "You are all done playing!"
```

### Questions 2: Lost in parameters

What will log to console the following code snippet:

```js
(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a); // What is logged?
    })(1);
})(0);
```

### Questions 3: Who's who

What will log to console the following code snippet:

```js
let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count); // What is logged?
    }
    console.log(count); // What is logged?
})();
```

### Questions 4: Tricky closure

What will log to console the following code snippet:

```js
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?
    }, 1000);
}
```

### Questions 5: Right or wrong message

What will log to console the following code snippet:

```js
function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }

    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?
```

### Questions 6: Restore encapsulation

The following function createStack() creates instances of stack data structure:

```js
function createStack() {
return {
items: [],
push(item) {
this.items.push(item);
},
pop() {
return this.items.pop();
}
};
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
stack.items = [10, 100, 1000]; // Encapsulation broken!
The stack works as expected, but with one small problem. Anyone can modify items array directly because stack.items property is exposed.

Thats an issue since it breaks the encapsulation of the stack: only push() and pop() methods should be public, but stack.items or any other details shouldnt be accessible.

Refactor the above stack implementation, using the concept of closure, such that there is no way to access items array outside of createStack() function scope:

function createStack() {
// Write your code here...
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => undefined
```

### Questions 7: Smart multiplication

Write a function multiply() that multiples 2 numbers:

```js
function multiply(num1, num2) {
// Write your code here...
}
If multiply(num1, numb2) is invoked with 2 arguments, it should return the multiplication of the 2 arguments.

But if invoked with 1 argument const anotherFunc = multiply(num1), the function should return another function. The returned function when called anotherFunc(num2) performs the multiplication num1 \* num2.

multiply(4, 5); // => 20
multiply(3, 3); // => 9
const double = multiply(2);
double(5); // => 10
double(11); // => 22
```
