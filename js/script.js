
const sceltaUtente = prompt("giochiamo! Scommetti se il risultato finale sarà pari o dispari");
if ((sceltaUtente === "pari") || (sceltaUtente === "dispari")) {
    console.log("ok hai scelto se pari o dispari, andiamo avanti")
    console.log(sceltaUtente)

    const numeroUtente = prompt("ora dimmi un numero tra uno e 5")

    if (isNaN(numeroUtente)) {
        console.log("ti avevo chiesto un numero")

    } else {
        console.log("ok è un numero")
        if ((numeroUtente <= 5) && (numeroUtente > 0)) {
            console.log("ok puoi giocare")
            const numeroComputer = randomizzatore(5, 1)
            console.log(numeroComputer);
            const numeroUtenteParse = parseInt(numeroUtente);
            const somma = numeroComputer + numeroUtenteParse;
            console.log("la somma è " + somma);
            const check = iseven(somma);
            if (sceltaUtente === check) {
                console.log("hai vinto")
            } else {
                console.log("hai perso")
            }



        } else {
            console.log("non mi hai dato un valore appropriato ricarica la pagina e ricontrolla")
        }
    }

} else {
    console.log("ti avevo chiesto di scegliere tra pari o dispari ricarica la pagina e ricontrolla")
}


const parola = prompt("ora facciamo un altro gioco, dimmi una parola io ti diro se è palindroma, se si puo leggere anche al contrario. Mi raccomando niente maiuscole o potrei sbagliare :D")


const inverso = reverse(parola);
console.log(inverso);
if(parola === inverso){
    console.log("la parola è palindroma")
} else {
    console.log("la parola non è palindorma")
}




function randomizzatore(max, min) {
    const numeroTemporaneo = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroTemporaneo
}

function iseven(number) {
    let result = "dispari";
    if (number % 2 === 0) {
        result = "pari";
    }
    return result
}

function reverse(txt) {
    let result = "";
    for (let i = txt.length -1; i >= 0; i--) {
        let curLetter = txt[i];
        result += curLetter;
    }
    return result
}