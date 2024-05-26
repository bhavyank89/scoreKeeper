const p1Button = document.querySelector('#player1');
const p2Button = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');
const p1Span = document.querySelector('#spanPlayerOne');
const p2Span = document.querySelector('#spanPlayerTwo');
let maxNum = document.querySelector('#num');

let p1Score = 0;
let p2Score = 0;
let winningScore = 2;
let isGameOver = false;

maxNum.addEventListener('change', function () {
    winningScore = parseInt(maxNum.value);
    p1Score = 0;
    p2Score = 0;
    p1Span.textContent = p1Score;
    p2Span.textContent = p2Score;
    p1Span.style.color = '';
    p2Span.style.color = '';
    p1Button.style.backgroundColor = 'rgb(142, 217, 101)';
    p2Button.style.backgroundColor = 'rgb(74, 194, 238)';
    isGameOver = false;
})


p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        p1Span.textContent = p1Score;

        if (p1Score == winningScore) {
            isGameOver = true;
            p1Span.style.color = 'green';
            p2Span.style.color = 'red';

            p1Button.style.backgroundColor = 'rgb(191, 210, 181)';
            p2Button.style.backgroundColor = 'rgb(169, 213, 228)';
        }
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        p2Span.textContent = p2Score;

        if (p2Score == winningScore) {
            isGameOver = true;
            p2Span.style.color = 'green';
            p1Span.style.color = 'red';

            p1Button.style.backgroundColor = 'rgb(191, 210, 181)';
            p2Button.style.backgroundColor = 'rgb(169, 213, 228)';
        }
    }
})

resetButton.addEventListener('click', function () {
    p1Score = 0;
    p2Score = 0;
    p1Span.textContent = p1Score;
    p2Span.textContent = p2Score;
    p1Span.style.color = '';
    p2Span.style.color = '';
    p1Button.style.backgroundColor = 'rgb(142, 217, 101)';
    p2Button.style.backgroundColor = 'rgb(74, 194, 238)';
    isGameOver = false;
})