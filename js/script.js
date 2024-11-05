const sceltaUtente = prompt("giochiamo! Scommetti se il risultato finale sarà pari o dispari");
if ((sceltaUtente === "pari") || (sceltaUtente === "dispari")) {
    console.log("ok hai scelto se pari o dispari, andiamo avanti")

    const numeroUtente = prompt("ora dimmi un numero tra uno e 5")

    if (isNaN(numeroUtente)) {
        console.log("ti avevo chiesto un numero")

    } else {
        console.log("ok è un numero")
        if ((numeroUtente <= 5) && (numeroUtente > 0)) {
            console.log("ok puoi giocare")
        } else {
            console.log("non mi hai dato un valore appropriato ricarica la pagina e ricontrolla")
        }
    }

} else {
    console.log("ti avevo chiesto di scegliere tra pari o dispari ricarica la pagina e ricontrolla")
}

