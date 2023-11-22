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
numberCreated = [randomNumber];

// parametri dei numeri min e max
numberOne = 1;
numberTwo = 100;

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
        // apro altro click, quando clicco su cella, si colora DA INSERIRE NEL FOR ALTRIMENTI NON FUNZIONA
        currentSquare.addEventListener('click', function(){
        currentSquare.classList.add('blue')
        console.log(squareContent);


        // variabile che crea nuovo numero random tra 1 e 16
        let numberUnique = randomNumber (numberOne,numberTwo);
        // numero si vede MA RIPETUTO 
        console.log(numberUnique);

    
        while (numberCreated.includes (squareContent)){
            numberUnique === randomNumber;
            console.log(numberUnique)
        }


        });
    }
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
}