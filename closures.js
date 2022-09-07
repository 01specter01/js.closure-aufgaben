console.log("Aufgabe 1");

function specialMultiply(num1, num2) {
    if (arguments.length === 2) return num1 * num2;
    else if (arguments.length === 1) {
        return function specialMultiply(num2) {
            return num1 * num2;
        };
    }
}
console.log(specialMultiply(3, 4));
console.log(specialMultiply(3)(4));
console.log("Aufgabe 2");
