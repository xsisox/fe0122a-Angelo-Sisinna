 
//con questa funzione salvo e aggiorno i dati in localstorage
function salvaDatiNelDb(aggiunta){

    /*salvataggio dati*/
    
        /* versione estesa
        if( localStorage.getItem('elementiSalvati') == null ){
            var db = [aggiunta]
        }else{
        var db = JSON.parse(localStorage.getItem('elementiSalvati'))
        db.push(aggiunta)
    }
    */

    var ls = localStorage.getItem('elementiSalvati')
    
    var db = ls ? JSON.parse(ls) : []
    db.push(aggiunta)
    
    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}

//con questa funzione rimuovo un elemento da localstorage
function rimuoviElementodaDb(el){

    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento,1)

    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}



//----------------------------------------------------------------


/* Nella variabile "pulsante inserisco il button con id "add_btn" */
let pulsante = document.querySelector("#add_btn");



//Creo una funzione che viene invocata premendo il button
pulsante.addEventListener("click", function(){

    //testo che viene digitato  
    let testoInput = document.querySelector("#task_txt").value;

    //Inserisco nella variabile "checkList" il tag ul con id "tasks_list_html"
    let checkList = document.querySelector("#tasks_list_html");

    //Inserisco nella variabile "pointList" gli elemnti li della ul
       
    let pointList = document.createElement("li");

    //Inserisco il testo inserito nell'input all'interno dei tag li
        
    pointList.innerHTML = testoInput;

    pointList.classList.add("pointer");
    

    checkList.append(pointList);

    pointList.addEventListener("click", function(){
        pointList.remove()
    })

    salvaDatiNelDb(testoInput)
})

//----------------------------------------------------------------

function creaHtml(){

    let elementiSalvati = JSON.parse(localStorage.getItem('elementiSalvati'));



    elementiSalvati.forEach(function(elemento){

        let pointList = document.createElement("li");
        pointList.innerHTML = elemento;
        let checkList = document.querySelector("#tasks_list_html");

        pointList.classList.add("pointer");

        checkList.append(pointList);

        pointList.addEventListener("click", function(){
            pointList.remove();
            rimuoviElementodaDb(pointList);
        })

    })
}

creaHtml();




 
 






