
//creo la funzione per il reset del tasto C//creo la variable e il metodo da inserire in html tramite id //assegno a alla variabile risultato un valore di 'reset/campovuoto' 

function resetCalcolatrice(){ 
    let risultato = document.getElementById("risultato") 
    risultato.value = ''
}


//creo la funzione per il totale del tasto =//creo la variable e il metodo// eval serve a valutare un'espressione 

/*function totale(){ 
    let res = document.getElementById("risultato") 
    let totale = eval(res.value); 
}*/


function totale() { 
    document.getElementById("risultato").value=eval(document.getElementById("risultato").value); 
    } 

// creo la funzione del tasto  //creo la variabile e il metodo  // inserisco id parametri tasto//da un numero al valore

function prendiTasto(tasto){ 
    let risultato = document.getElementById("risultato")
    let num = tasto.id;
    risultato.value += num 
}

