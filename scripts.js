//58. Ovládni JavaScript - Hra v JavaScriptu nový projekt a stažení obrázků kostky

//59. Ovládni JavaScript - Hra v JavaScriptu: pozadí linear gradient a hrací plocha

//60. Ovládni JavaScript - Hra v JavaScriptu: přidání celkového skóre

//61. Ovládni JavaScript - Hra v JavaScriptu: přidání současného skóre

//62. Ovládni JavaScript - Hra v JavaScriptu: tlačítka k ovládání hry

//63. Ovládni JavaScript - Hra v JavaScriptu: obrázek kostky

//64. Ovládni JavaScript - Hra v JavaScriptu: vynulování hodnot a základní proměnné

//65. Ovládni JavaScript - Hra v JavaScriptu: házíme kostkou pomocí náhodného čísla






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


//ZAKLADNE PREMENNE

var totalScore , roundScore, activePlayer, dice;  //celkove skoro a skore v ramci jedného kola, aktívny hráč a hodnota kocky.

totalScore = [0,0];
roundScore = 0;
activePlayer = 0;


//HODENIE KOCKOU

document.querySelector(".rollDice").addEventListener("click", function(){
    //1. generujeme náhodné číslo medzi 1 a 6
    var dice = Math.ceil(Math.random()*6);  

    //2. zobraziť správny obrázok
    var diceElement = document.querySelector(".diceImage");
    console.log(diceElement.src = "img/" + dice + ".jpg");
    diceElement.style.display = "block";

});

