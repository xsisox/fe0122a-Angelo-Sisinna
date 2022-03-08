

   $(()=>{
    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock"];

        /*genera ciclicamente 16 div contenenti le immagini pescate randomicamente*/

    for(let i = 0; i < 16; i++){ //crea un ciclo che si fermi alla sedicesima iterazione 

        let random = Math.floor(Math.random() * mieImg.length)//genera un numero randomico che va da zero al numero di elementi presenti nell'array mieImg
        let immagineRandom = mieImg.splice(random, 1) //usa come un indice il numero appena generato, ed usalo per pescare randomicamente un'immagine

        $('<div class="images" id="emoji0'+i+'"><img id="'+i+'"src="img/'+immagineRandom+'.png" width="130" height="130"></div>').appendTo('#memory')
    }
    
    immaginiCliccate = [] //creo un array in cui salverò le informazioni sugli elementi cliccati

        /*gestione evento click*/

    $('.images').click(function(){//preparo un gestore per l'evento click sugli elementi cliccati(quelli con la classe .images)

        let nClick = $('.numclicks span').text() //inizia creando una variabile che legga il testo contenuto nel tag html che mostra il numero di click(span dentro a .numclicks)
        nClick++  //incrementa di 1 il valore ottenuto
        $('.numclicks span').text(nClick) //riscrivi il numero nell'html, sostituendolo con quello pre esistente

        /*crea un controllo che indichi se l'array immaginiCliccate contiene o meno i due elementi da controllare*/

        if(immaginiCliccate.length !=2){//se nell'array ci sono meno di 2 elementi permetterai di aggiungerne altri
                                        
            let imgId = $(this).children().attr('id')//crea una variabile contenente l'id dell'immagine cliccata

            let imgSrc = $(this).children().attr('src')//crea una variabile contenente l'attributo src dell'immagine cliccata

            $('#' +imgId).show()//rendi visibile l'immagine presente nell'elemento cliccato

            let oggettoImg = { //crea un oggetto contenente le proprietà id ed src salvate nelle 2 variabili appena create
                id: imgId,
                src: imgSrc
            }

            immaginiCliccate.push(oggettoImg)//aggiungi l'oggetto appena creato all'array immaginiCliccate

            if(immaginiCliccate.length == 2){//controlla quante immagini sono state cliccate(con un if), se sono 2 devi verificare se sono identiche o meno 

                if(immaginiCliccate[0].src == immaginiCliccate[1].src){//crea un nuovo if per verificare se le immagini selezionate sono identiche o meno
                    immaginiCliccate = []//se le proprietà src sono diverse svuota l'array immaginiCliccate e nascondi entrambe le immagini

                }else{
                    setTimeout(function(){//usa setTimeout() per far sparire le immagini dopo un certo lasso di tempo, per far si che l'utente possa osservare le carte che ha scoperto prima che queste scompaiano
                        $('#'+immaginiCliccate[0].id).hide()
                        $('#'+immaginiCliccate[1].id).hide()

                        immaginiCliccate = []
                    }, 300)
                }
            }
       }

    })
    
    
   

})
        
       
            
            
          
    
            
        
    


        
    
        
    
            
           
            
    
            
            
    
                
                
    
                
                
               
               
                
                
    
                
    
                    
                   
                    
                    
                     
                    
