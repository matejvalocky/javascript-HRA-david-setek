//58. Ovládni JavaScript - Hra v JavaScriptu nový projekt a stažení obrázků kostky

//59. Ovládni JavaScript - Hra v JavaScriptu: pozadí linear gradient a hrací plocha

//60. Ovládni JavaScript - Hra v JavaScriptu: přidání celkového skóre

//61. Ovládni JavaScript - Hra v JavaScriptu: přidání současného skóre

//62. Ovládni JavaScript - Hra v JavaScriptu: tlačítka k ovládání hry

//63. Ovládni JavaScript - Hra v JavaScriptu: obrázek kostky

//64. Ovládni JavaScript - Hra v JavaScriptu: vynulování hodnot a základní proměnné

//65. Ovládni JavaScript - Hra v JavaScriptu: házíme kostkou pomocí náhodného čísla

//66. Ovládni JavaScript - Hra v JavaScriptu: nasčítáváme čísla z kostky

//67. Ovládni JavaScript - Hra v JavaScriptu: přepínání hráčů a zvýraznění aktuálního hráče

//68. Ovládni JavaScript - Hra v JavaScriptu: hráči si mohou podržet své skóre

//69. Ovládni JavaScript - Hra v JavaScriptu: načítání skóre i u druhého hráče

//70. Ovládni JavaScript - Hra v JavaScriptu: funkce pro resetování hry


//71. Ovládni JavaScript - Hra v JavaScriptu: máme vítěze, tak zastavíme hru






//VYNULOVANIE SKÓRE CEZ JAVASCRIPT


//VYNULOVANIE TOTAL SCORE
document.getElementById("totalScorePlayer-0").textContent = 0;
document.getElementById("totalScorePlayer-1").textContent = 0;

//VYNULOVANIE CURRENT SCORE
document.getElementById("currentScore0").textContent = 0;
document.getElementById("currentScore1").textContent = 0;

//KONIEC VYNULOVANIA SKÓRE



//SKRYTIE KOCKY
document.querySelector(".diceImage").style.display = "none";

newStart();



function newStart(){
    totalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;

    playGame = true;

// vynulovanie a odstránenie kocky
    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;

    document.getElementById("currentScore0").textContent = 0;
    document.getElementById("currentScore1").textContent = 0;

//skrytie kocky
    document.querySelector(".diceImage").style.display = "none";
//texty do pôvodného stavu
    document.querySelector("#name-0").textContent = "Skóre 1. hráča";
    document.querySelector("#name-1").textContent = "Skóre 2. hráča";

//vrátime zvýraznenie aktívneho hráča k prvému a u druhého odstraníme
    document.querySelector(".totalScore0").classList.add("active"); 
    document.querySelector(".totalScore1").classList.remove("active"); 
}




//ZAKLADNE PREMENNE

var totalScore , roundScore, activePlayer, dice, playGame;  //celkove skoro a skore v ramci jedného kola, aktívny hráč a hodnota kocky.

totalScore = [0,0];
roundScore = 0;
activePlayer = 0;




//HODENIE KOCKOU

document.querySelector(".rollDice").addEventListener("click", function(){
    if(playGame){
//1. generujeme náhodné číslo medzi 1 a 6
var dice = Math.ceil(Math.random()*6);  // náhodné číslo z kocky

//2. zobraziť správny obrázok
var diceElement = document.querySelector(".diceImage");
console.log(diceElement.src = "img/" + dice + ".jpg");
diceElement.style.display = "block";

//3. načítanie + nasčítanie hodnotky z kocky


//ak nám padne jednotka, tak celé roundScore sa nám vymaže na 0, a to zapíšeme podmiekou
 
    if (dice !== 1){                        // tak urob toto = načítame roundScore
    roundScore = dice + roundScore;
    document.getElementById("currentScore" + activePlayer).textContent = roundScore;
}   else {                                // inak urob toto = vymaže sa nám roundScore = padne nám jednotka z kocky a bude hrať ďalší hráč
        nextPlayer();
        }
    }
});


/* PREPINANIE HRACOV */

function nextPlayer(){
    if(activePlayer === 0){     /* PREPINANIE HRACOV */
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }

    roundScore = 0;
    document.getElementById("currentScore0").textContent = 0;  /* VYNULOVANIE SKORE*/
    document.getElementById("currentScore1").textContent = 0;  /* VYNULOVANIE SKORE*/
    document.querySelector(".diceImage").style.display = "none";  /* SKRYTIE KOCKY */
    document.querySelector(".totalScore0").classList.toggle("active"); /* PREPINAC */
    document.querySelector(".totalScore1").classList.toggle("active"); /* PREPINAC */

}

/* ZVYRAZNENIE AKTUALNEHO HRACA CEZ CSS */


/* PODRZAT SKORE */

document.querySelector(".holdScore").addEventListener("click", function(){
    if(playGame){ 
        //celkové skore sa vyplní súčasným skóre
    totalScore[activePlayer] =  totalScore[activePlayer] + roundScore; 
    //
    document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];

    if(totalScore[activePlayer] >=20){
        document.querySelector("#name-" + activePlayer).textContent = "Víťaz";
        document.querySelector(".diceImage").style.display = "none";
        playGame = false;
    }else{
        nextPlayer();
        }
    }
    
});

document.querySelector(".newGame").addEventListener("click", newStart);



