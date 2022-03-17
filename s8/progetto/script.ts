//mi collego al file json
fetch('Abbigliamento.json')
.then(res => res.json())
.then(data => {

    data.forEach((item:any) =>{
        let capi = new Vestiti(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)
        //console.log(capi)
    })
})
//creo la classe
class Vestiti{

    id: number
    codprod: number
    collezione: string
    capo: string
    modello: number
    quantita: number
    colore: string
    prezzoivaesclusa: number
    prezzoivainclusa: number
    disponibile: string
    saldo: number

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number){
        this.id = id
        this.codprod = codprod
        this.collezione = collezione
        this.capo = capo
        this.modello = modello
        this.quantita = quantita
        this.colore = colore
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo
    } 
    //creo il metodo per il saldo 
    public getSaldoCapo():any {
       
        return (this.prezzoivainclusa * this.saldo / 100).toFixed(2)
    }
    //creo il metodo per l'acquisto 
   public getAcquistoCapo():any{
        
        let sconto = this.prezzoivainclusa * this.saldo / 100;
        let prezzo = this.prezzoivainclusa
        return (prezzo - sconto).toFixed(2)
    }
}

//CAPI ABBIGLIAMENTO
let capo1 = new Vestiti (1,2121,"primavera","cardigan",1231,5,"nero",18.50,22.57,"negozio",45)
let capo2 = new Vestiti (2,4111,"estate","t-shirt",1251,6,"rosso",5.50,6.71,"magazzino",30)
let capo3 = new Vestiti (3,1181,"inverno","felpa",1229,8,"beige",17.50,21.35,"negozio",50)
let capo4 = new Vestiti (4,1111,"estate","maglione",1221,4,"verde",20,24.40,"negozio",50)
let capo5 = new Vestiti (5,6111,"primavera","maglia",1021,5,"blu",11,13.42,"magazzino",60)


//li mostro in console
console.log(capo1)
console.log(`Lo sconto è di ${capo1.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo1.getAcquistoCapo()} €`)

console.log(capo2)
console.log(`Lo sconto è di ${capo2.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo2.getAcquistoCapo()} €`)

console.log(capo3)
console.log(`Lo sconto è di ${capo3.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo3.getAcquistoCapo()} €`)

console.log(capo4)
console.log(`Lo sconto è di ${capo4.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo4.getAcquistoCapo()} €`)

console.log(capo5)
console.log(`Lo sconto è di ${capo5.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo5.getAcquistoCapo()} €`)
