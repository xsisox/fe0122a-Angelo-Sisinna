// Quando il documento è pronto...
    $(document).ready(()=>{
        
        $("#iscr-news").click(function(){ //gestisco il click sul pulsante Iscriviti
            var controllo = $("#nome").val();
            var controllo1 = $("#email-1").val();
            var controllo2 = $("#email-2").val();

            if(controllo == "" || controllo == undefined){  // inizializzo una variabile di controllo a true
                 $("#nome").next().text("* Richiesto") // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
            }else{$("#nome").next().text(""); }


            if(controllo1 == "" || controllo == undefined){  // inizializzo una variabile di controllo a true
                $("#email-1").next().text("* Richiesto") // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
            }else{$("#email-1").next().text(""); }

            if(controllo2 == "" || controllo2 == undefined){  // inizializzo una variabile di controllo a true
            $("#email-2").next().text("* Richiesto") // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
           }else{$("#email-2").next().text(""); }

            if(controllo1 != controllo2){
                $("#email-2").next().text("Le email non corrispondono")
               //oppure con allert----> alert("Le email non corrispondono");
            }


            
            
           
        })

        
         
        $("#pulisci-form").click(function(){
            //sostituisci tutti gli input type-text con valore stringa vuota
            $("input:text").val("")
        })
        
        
        /*$("form").submit(function(){ 
            alert('inviato')
        })*/
           
    })


    
    
    
        
        
       
        
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

        //invio del form se tutti i campi sono validi

    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 
