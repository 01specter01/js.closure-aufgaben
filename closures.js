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
            return "start a new game";
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
