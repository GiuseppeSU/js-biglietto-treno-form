

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

       let nomeOfferta="standard"

        if (anni < 18) {
            let sconto = somma * 20 / 100
            somma = somma - sconto
            somma = somma.toFixed(2);
            nomeOfferta="Offerta junior"



            
        } else if (anni >= 66) {
            let sconto = somma * 40 / 100
            somma = somma - sconto
            somma = somma.toFixed(2);
            nomeOfferta="Offerta Gold"



        } else {

            somma = somma.toFixed(2);
            
        }

        document.getElementById("totale").innerHTML =  somma + "€";
        document.getElementById("nome_utente").innerHTML = utente;
        document.getElementById("offerta").innerHTML =  nomeOfferta;
        document.getElementById("carrozza").innerHTML =  numeroCasuale  ;
        document.getElementById("code").innerHTML =  numeroCp  ;

    }


);

const pulsanteReset = document.querySelector('#resettaForm');


pulsanteReset.addEventListener ('click',
    function () {
        document.getElementById("promo").value="";
        document.getElementById("km").value="";
        document.getElementById("utente").value="";

        document.getElementById("totale").innerHTML =  "";
        document.getElementById("nome_utente").innerHTML=  "";
        document.getElementById("offerta").innerHTML =  "";
        document.getElementById("carrozza").innerHTML=  ""  ;
        document.getElementById("code").innerHTML =  ""  ;

})












