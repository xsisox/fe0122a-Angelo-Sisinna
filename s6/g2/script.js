// Quando il documento è pronto...
//let titoliH2 = $("h2");
        //$("p").find(titoliH2).addClass("meno");
       //$(titoliH2).currentTarget

$(document).ready(function(){
    $("h2").click(function(evt){
        

       let titoliH2 = $(evt.currentTarget); 
       $(titoliH2).toggleClass("meno");//do la classe meno agli h2

       if(titoliH2.hasClass("meno")){
           $(titoliH2).next().show(); //mostra class meno--assegno ai fratelli di h2 lo show

       }else{
        $(titoliH2).next().hide(); //nascondi class meno--assegno ai fratelli di h2 l'hide
           
       } 

    })

})



    // collega i gestori evento per il click per tutti i tag h2.
    
        // crea una variabile ed immagazzina al suo interno il tag h2 che inizializza l'evento (usa .currentTarget).
        
        
        // attiva la classe .meno dei CSS sul tag h2.
        

        // mostra o nascondi il div, utilizza un if-else.
        

        // utilizza il prepreventDefault() per prevenire che il gestore eventi di default sia eseguito.
    

    // imposta il focus sul primo tag ancor dell'h2
