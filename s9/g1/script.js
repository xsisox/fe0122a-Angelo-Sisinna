/*fetch('regioni.json').then(res => res.json()).then((res)=>{
    res.forEach(element =>{
        //append option -> element.prov_regione
    })
})

function getInfoRegione(reg){
    fetch('regioni.json').then(res=>res.json()).then(res=>res.filter(() => {
        return res.prov_reg == reg
    })).then((res)=>{
        res.forEach((e)=>{

        })
    })
}*/
/*fetch('regioni.json').then(res => res.json()).then((res)=>{
    res.forEach(element =>{
    
        //append option -> element.prov_regione
    })
})*/
/*function getInfoRegione(reg){
    fetch('province.json').then(res=>res.json()).then(res=>res.filter(() => {
        return res.prov_reg == reg
    })).then((res)=>{
        res.forEach((e)=>{

        })
    })
}*/
/*(async () => {
    const response = await fetch("regioni.json");
    const datiJson = await response.json();
    append (datiJson) = option
    console.log(datiJson);
})();*/
/*$(document).ready(function(){
    $.ajax({
        url: 'regioni.json',
        type: 'GET', dataType: 'json',
        success:function(data){
            $.each(data, function(i,el){
                var regione = el.prov_regione;
                $('#regione').append(regione)
                console.log(regione)
            })
        }
    })
})*/
fetch('regioni.json') //richiamo il file json locale
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (regioni) {
        var option = document.createElement("option"); //creo la var option e la collego al suo elemento 
        option.innerText = regioni.prov_regione; //do al valore di option il risultato delle regioni 
        var menu = document.querySelector("#regioni"); //creo una var menu e la collego all id dell html di regioni
        menu.append(option); //appendo il menu all option
        menu.addEventListener("change", stampaDati()); //creo l'evento del change e lancio la funzione stampadati
        function stampaDati() {
            var valueRegioneSelezionata = menu.value; //creo una var vRS e le do il valore di menu
            var regioneSelezionata;
            for (var i = 0; i < data.length; i++) { //ciclo le  regioni
                if (data[i].prov_regione == valueRegioneSelezionata) {
                    regioneSelezionata = data[i];
                }
            }
            //document.getElementById('regioneSelezionata').setAttribute('src', 'img' + provinciaSelezionata)
        }
    });
});
fetch('province.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (province) {
        var option = document.createElement("option");
        option.innerText = province.prov_nome;
        var menu = document.querySelector("#province");
        menu.append(option);
        menu.addEventListener("change", stampaDati());
        function stampaDati() {
            var valueProvinciaSelezionata = menu.value;
            var provinciaSelezionata;
            for (var i = 0; i < data.length; i++) {
                if (data[i].prov_nome == valueProvinciaSelezionata) {
                    provinciaSelezionata = data[i];
                }
            }
        }
    });
});
function stampaImg() {
}
