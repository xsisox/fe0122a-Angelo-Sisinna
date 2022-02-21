var dataAttuale = new Date();
       

        document.querySelector("h1").innerHTML = dataAttuale;

        var anno = document.getElementById("anno");

        anno.innerText = dataAttuale.getFullYear();

        let year = dataAttuale.getFullYear();

        
        let month = dataAttuale.getMonth();
        document.getElementById("mese").innerText = month;

        let day = dataAttuale.getDate();
        document.querySelector("p.giorno").innerText = day;

        
        document.querySelector("h3 > input").value = 
        (day + '/' + month + '/' + year);
        
