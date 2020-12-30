'use strict';

// const arr = [ 5, 9, 47, 0, 80, 170, 4, 1];

// let max = arr[0];

// for(let i = 0; i < arr.length; i++){
//     if(max > arr[i]){
//         max = arr[i]
//     }
// }

const secretNumber = document.querySelector('.number')
const highscorePoints = document.querySelector('.highscore')

const btn = document.querySelector('.check');
const btnAgain = document.querySelector('.again')
const bodyGreen = document.querySelector('body');

let score = 20
let highscore = 0
let number = Math.trunc(Math.random() *20)+1

const displayMessage = (message) => {
    return document.querySelector('.message').textContent = message

}



btn.addEventListener('click' , () => {
    const guess = Number(document.querySelector('.guess').value)
 
   console.log(guess, typeof guess);
    if(!guess){
        displayMessage('Ingrese un numero menor a 20.')
    
    }else if (guess === number) {
        if(score > 1){
           displayMessage(`El Numero Secreto era ${number}. Has Ganado😃😃✨✨.`)
            bodyGreen.classList.add('win')
            secretNumber.textContent = number
            if(highscore < score){
                
                highscorePoints.textContent = score;
                highscore = score
            }
            btn.classList.add('btn-none-win');
        }
    }else if( guess !== number){
        if(score > 1 ){
            guess > number ? displayMessage('El numero secreto es Menor ⏬⏬⏬. Intentalo de nuevo💪💪.') : displayMessage('El numero secreto es Mayor ⏫⏫⏫. Intentalo de nuevo💪💪.')
            ;
            score--;
            document.querySelector('.score').textContent = score
        }else{
            displayMessage('Has perdido 😥😥. Vuelve a intentarlo😁😁');
           document.querySelector('.score').textContent = 0
           bodyGreen.classList.add('lose')
           secretNumber.textContent = number
           btn.classList.add('btn-none-win');
        }
    }
 
})

btnAgain.addEventListener('click', () => {
   displayMessage('Start, Good Luck...');
    const guess = document.querySelector('.guess').value = ''
    number = Math.trunc(Math.random() *20)+1
    secretNumber.textContent='?';
    score = 20
    document.querySelector('.score').textContent = score
    btn.classList.remove('btn-none-win');
    bodyGreen.classList.remove('win');
    bodyGreen.classList.remove('lose')
});
   




 