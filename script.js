let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector(".wrng");
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;

console.log(answer);

let numGuesses = 0;

btn.addEventListener("click", () => {
    guessesNumber();
});

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        guessesNumber();
    }
});


function guessesNumber() {
    let inputValue = Number(input.value);

    if (inputValue < 1 || inputValue > 100 || isNaN(inputValue)) {
        wrng.innerHTML = "Wrong Input! Enter a number between 1 to 100.";
    } 
    
    else {
        numGuesses++;
        guesses.innerHTML = "No. of Guesses: " + numGuesses;

        if (inputValue > answer) {
            wrng.innerHTML = `Try again with a smaller number than ${input.value}`;
            input.value = "";
        } 
        else if (inputValue < answer) {
            wrng.innerHTML = `Try again with a larger number than ${input.value}`;
            input.value = "";
        } 
        else {
            wrng.innerHTML = "Congratulations, you guessed the correct answer.";
            setTimeout(() => {
                resetGame();
            }, 5000);
        }
    }
}

function resetGame() {
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    guesses.innerHTML = "No. of Guesses: 0";
    wrng.innerHTML = "";
}
