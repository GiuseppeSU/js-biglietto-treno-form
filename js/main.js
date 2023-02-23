

const geButton = document.querySelector('#informazioni');

 geButton.addEventListener('click', 
    function () {
        let km ;
        let anni;
        let prezzo = 0.21
        let somma = km * prezzo
        

        if(anni < 18 ){
            let sconto = somma * 20 / 100
            somma= somma - sconto
            somma = somma.toFixed(2);
            document.getElementById("sconto1").innerHTML="Sconto ragazzi under 18 : " + sconto.toFixed(2) + "€";
        
            
            
        } else if (anni >= 66 ) {
            let sconto = somma * 40 / 100
            somma= somma - sconto
            somma = somma.toFixed(2)  ;
            document.getElementById("sconto1").innerHTML="Sconto over 65 : " + sconto.toFixed(2) + "€" ;
           
        
        }else{
            
            somma = somma.toFixed(2);
        }
        
        document.getElementById("totale").innerHTML="Il totale del prezzo del biglietto è: " + somma + "€";
     
    }
);











