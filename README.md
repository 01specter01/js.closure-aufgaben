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
