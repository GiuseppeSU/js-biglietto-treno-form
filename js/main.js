

const geButton = document.querySelector('#informazioni');

geButton.addEventListener('click',
    function () {
        let utente = document.getElementById("utente").value;
        let km = document.getElementById("km").value;
        let anni = parseInt(document.getElementById("promo").value)
        const prezzo = 0.21;
        let somma = km * prezzo
        let numeroCasuale = Math.floor(Math.random()*10) +1;
        const numeroCp = Math.floor((Math.random() * 90001)) + 10000;

       

        if (anni < 18) {
            let sconto = somma * 20 / 100
            somma = somma - sconto
            somma = somma.toFixed(2);




        } else if (anni >= 66) {
            let sconto = somma * 40 / 100
            somma = somma - sconto
            somma = somma.toFixed(2);



        } else {

            somma = somma.toFixed(2);
        }

        document.getElementById("totale").innerHTML =  somma + "€";
        document.getElementById("nome_utente").innerHTML = utente;
        document.getElementById("offerta").innerHTML =  anni;
        document.getElementById("carrozza").innerHTML =  numeroCasuale  ;
        document.getElementById("code").innerHTML =  numeroCp  ;

    }
);











