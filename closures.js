console.log("Aufgabe 1");

function specialMultiply(num1, num2) {
    if (arguments.length === 2) return num1 * num2;
    return function specialMultiply(num2) {
        return num1 * num2;
    };
}

console.log(specialMultiply(3, 4));
console.log(specialMultiply(3)(4));
console.log("---------------");
console.log("Aufgabe 2");
function guessingGame(amount) {
    let answer = Math.floor(Math.random() * 11);
    let guesses = 0;
    return function guessingGame(guess) {
        if (guesses < amount) {
            guesses++;
            if (guess === answer) return "You got it!";
            if (guess > answer) return "Your guess is too high!";
            if (guess < answer) return "Your guess is too low!";
        } else {
            return (
                "Wrong! start a new game, the ansewer wold have been:" + answer
            );
        }
    };
}
let firstGame = guessingGame(5);
console.log(firstGame(7));
console.log(firstGame(3));
console.log(firstGame(10));
console.log(firstGame(8));
console.log(firstGame(4));
console.log(firstGame(2));

console.log("---------------");
console.log("Aufgabe 2 Web");
console.log("Antwort ist 1");
console.log("---------------");
console.log("Aufgabe 3 Web");
console.log("1,0");
console.log("---------------");
console.log("Aufgabe 4 Web");
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?
    }, 1000);
}
console.log("3,3,3");
console.log("---------------");
console.log("Aufgabe 5 Web");
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
console.log("Antwort: count is 0");
console.log("---------------");
console.log("Aufgabe 6 Web");

console.log("---------------");
console.log("Aufgabe 7 Web");
console.log("---------------");
