/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati:
- abbiamo calpestato una bomba
- la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/


// ! tutto dentro il click

// creo variabile button                        
const buttonClick = document.querySelector('button');

// creo variabile per dare padre al figlio nel ciclo for             
const mainContentEl = document.querySelector('.wrapper');

// array dove metto numeri generati
const numberCreated = [];

// parametri dei numeri min e max
let numberOne = 1;
let numberTwo = 100;

// inizializzo variabile per punti
let value = 0;

isGameOver=false;

// richiamo il button al click                 
buttonClick.addEventListener('click', function(){
    // prima di ricrearle, svuoto la riga per non ripeterlo a ogni click
    mainContentEl.innerHTML = '';
    // creo ciclo di 100 numeri
    for (let i= 1; i <=100; i++){
        const currentSquare = newSquare();
        const squareContent= i;
        mainContentEl.appendChild(currentSquare);
        // numeri da inserire con squareContent
        currentSquare.innerHTML += `<span> ${squareContent} </span>`;

            //! PARTE NUOVA
            // variabile che crea nuovo numero random tra 1 e 16
            let numberUnique = randomNumber (numberOne,numberTwo);
            // numero si vede MA RIPETUTO 
            console.log(numberUnique);

            if (numberCreated.length < 16) {
                let bombNumber = randomNumber(numberOne, numberTwo);
                while (numberCreated.includes(bombNumber)) {
                    bombNumber = randomNumber(numberOne, numberTwo);
                }
                numberCreated.push(bombNumber);
            };

        // apro altro click, quando clicco su cella e visualizzo numero in console, si colora DA INSERIRE NEL FOR ALTRIMENTI NON FUNZIONA
        currentSquare.addEventListener('click', function(){   
            
        // se il gioco è finito, fai una serie di cose
            if (!isGameOver){
                // se il numero corrisponde a uno di quelli random, si colora di rosso e finisce la partita
                if(numberCreated.includes(squareContent)){
                    currentSquare.classList.add('red');
                    alert ('Game Over!!!!!!!');
                    isGameOver= true;
                }
                else {
                    currentSquare.classList.add('blue')
                    // visulizzare il valore , aggiungendo un punto
                    console.log(++value);
                    // aggiunge punteggio
                    updateCurrentScore(value);
                }
            }
        }); 
    };

// chiuso ciclo for
});
// chiusura click



// funzione per creare UN quadrato                                 
function newSquare (){
    const newElement = document.createElement ('article');
    newElement.classList.add ('square');
    return newElement;
};

// funzione che crea numero random
function randomNumber(numberOne, numberTwo){
    return Math.floor(Math.random () * (numberTwo - numberOne +1) + numberOne);
};

// funzione per aumentare punteggio
function updateCurrentScore (scoreToUpdate){
    const scoreBoardEl = document.getElementById('scoreboard');
    scoreBoardEl.innerText= scoreToUpdate;
}