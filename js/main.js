// recupero la griglia
const gridElement = document.getElementById("grid");

const sceltaPlayer = document.getElementById("difficolta");
let numeroCell;
let dimensioniCell;
let gameOver = false;
const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', function(){
    let points = 0;
    gridElement.innerHTML = "";
    if(sceltaPlayer.value == "facile"){
        numeroCell = 100;
        dimensioniCell = "square-1";
    } else if(sceltaPlayer.value == "medio"){
        numeroCell = 81;
        dimensioniCell = "square-2";
    }   else{
        numeroCell = 49;
        dimensioniCell = "square-3";
    }

    //genera 16 numeri casuali per le bombe
    const numeroBombe = [];
    let bombaProvvisoria;
    for ( let j = 1; j <= 16; j++){
        bomba = (randomNumber(1, numeroCell));
        for (let t = 1; t <= j; t++){
            if (bombaProvvisoria == numeroBombe){
                bombaProvvisoria = (randomNumber(1, numeroCell))
            }
        }
        numeroBombe.push(bomba);
    };

    console.log(numeroBombe);

    for (let i = 1; i < (numeroCell+1); i++){
        const square = document.createElement("div");
        square.classList.add(dimensioniCell);
        gridElement.appendChild(square);
        square.innerHTML = i;
        square.addEventListener('click', function(){
            if (!gameOver){
                if (!numeroBombe.includes(i) ){
                    square.classList.add('cliccato');
                    points++
                    writeInElementById('points', `Il tuo punteggio è : ${points}` )
                }else {
                    writeInElementById('points', `Hai perso , il tuo punteggio è : ${points} <br> Ricomincia un'altra partita` )
                    square.classList.add('bomba');
                    gameOver = true;
                }
            }
        });
        
    }


});

// la funzione restituisce un numero random fra un valore minimo e uno massimo
function randomNumber(minimumValue, maximumValue){
    //outPutNumeroPc.innerHTML += Math.floor(Math.random()*((maximumValue + 1) - minimumValue) + minimumValue);
    let valorePc = Math.floor(Math.random()*((maximumValue + 1) - minimumValue) + minimumValue);
    return valorePc;
}

//creo una funziona che aggiunge l'elemento id e una stringa
function writeInElementById(elementId, string){
    document.getElementById(elementId).innerHTML = string;
}