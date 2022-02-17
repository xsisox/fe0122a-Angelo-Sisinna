// funzione dentro un'altra funzione 

function operazione () {
    var num = 10;

    function somma () {
        console.log(num + num);
    
    }
     
    return somma();

}

operazione ();

//operatori di comparazione 

var x1 = 20;

var x2 = "20";

var x3 = "yoda";

var x4 = "yoda";

document.write ((x1 == x2) + "<br>"); // true

document.write ((x1 === x2) + "<br>"); // false

document.write ((x3 === x4) + "<br>"); // true

document.write ((x1 != x2) + "<br>");  // false

document.write ((x1 !== x2) + "<br>");  // true

//----------------------------------------------------------------

var y1 = 120;
var y2 = 230;

document.getElementById("comp").innerHTML = y1 >= y2;



// operatore ternario

gradi = 10;
var grappa = (gradi > 9) ? "Bevi" : "Prendi una vodka";

document.write(grappa);