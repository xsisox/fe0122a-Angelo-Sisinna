//creiamo la classe auto la quale sarà il nostro "stampino"
class Auto{
    constructor(id, NomeAutovettura, AnnoImmatricolazione, TipoDiCarburante, Colore, ChilometriPercorsi, PaeseProduzione, Cavalli, VelocitàMassima, PrezzoVendita,NomeFileImmagine){
        this.id = id;
        this.Nome = NomeAutovettura;
        this.AnnoImmatricolazione = AnnoImmatricolazione;
        this.TipoDiCarburante = TipoDiCarburante;
        this.Colore = Colore;
        this.ChilometriPercorsi = ChilometriPercorsi;
        this.PaeseProduzione = PaeseProduzione;
        this.Cavalli = Cavalli;
        this.VelocitàMassima = VelocitàMassima;
        this.PrezzoVendita = PrezzoVendita;
        this.NomeFileImmagine = NomeFileImmagine;
        } 
}

var automobili = [];
var menu;

function init(){
    var auto1 = new Auto(1, "Fiat 500X", 2021, "Diesel", "Rosso", 1200, "Italia", 120, "120 Km/h", "€ 18.000,00", "500x.png");
    
    var auto2 = new Auto(2, "BMW X1", 2022, "Diesel", "Blu", 0, "Germania", 180, 220, "31.000,00", 'bmw_x1.png');
    
    var auto3 = new Auto(3, "JEEP COMPASS 4xe", 2021, "Benzina", "Grigio", 0, "USA", 190, 220, "45.500,00", 'jeep_compass_4xe.png');
    
    var auto4 = new Auto(4, "JEEP COMPASS", 2021, "Diesel", "Blu", 500 , "USA", 130, 180, "35.000,00", 'jeep_compass.png');
    
    var auto5 = new Auto(5, "JEEP RENEGADE LIMITED", 2019, "Diesel", "Bianca", 80, "USA", 120, 200, "28.650,00", 'jeep_renegade.png');
    
    var auto6 = new Auto(6, "JEEP WRANGLER", 2000, "Benzina", "Bianca", 0, "USA", 190, 220, "60.500,00", 'jeep_compass_4xe.png');
    
    var auto7 = new Auto(7, "WOLKSWAGEN T-CROSS", 2021, "Diesel", "Bianca", 0, "Germania", 190, 220, "32.000,00", 'tcross.png');
    
    automobili.push(auto1, auto2, auto3, auto4, auto5, auto6, auto7);

    populate();
}


init();


function stampaDati(){
    let idAutoSelezionata = menu.value;
    //let AutoSelezionata = automobili.find(auto => auto.id==idAutoSelezionata);
    //console.log(AutoSelezionata);

    let AutoSelezionata;
    for (let i = 0;i<automobili.length;i++){
        if (automobili[i].id==idAutoSelezionata){
            AutoSelezionata=automobili[i];
        }
    }
    document.getElementById('immagineAutoSelezionata').setAttribute('src' ,'img/'+AutoSelezionata.NomeFileImmagine)
    document.getElementById('NomeAutovettura').innerHTML=AutoSelezionata.Nome

    console.log(JSON.stringify(automobili));
}

function populate(){
    menu = document.querySelector("#auto");
    menu.addEventListener("change", stampaDati)

    for (let i=0; i<automobili.length;i++){
      let option =  document.createElement("option");
      option.setAttribute('value', automobili[i].id)
      option.innerText= automobili[i].Nome + ' - €: ' + automobili[i].PrezzoVendita;
      menu.append(option);
    }
}



// <option value="1">FIAT 500X</option>
// <option value="2">MBW X1</option>