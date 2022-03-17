fetch('Abbigliamento.json')
.then(res => res.json())
.then(data => {

    data.forEach((item:any) =>{
        let capi = new Vestiti(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)
        //console.log(capi)
    })
})

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

    public getSaldoCapo():number {
       
        return this.prezzoivainclusa * this.saldo / 100
    }

   public getAcquistoCapo():number{
        
        let sconto = this.prezzoivainclusa * this.saldo / 100;
        return this.prezzoivainclusa - sconto
    }
}

//CAPI ABBIGLIAMENTO
let capo1 = new Vestiti(1,22333,"estate", "cardigan",123123,2,"nero", 18.50, 22.57, "negozio", 45)
let capo2= new Vestiti (4,4111,"estate","t-shirt",1251,6,"rosso",5.50,6.71,"magazzino",30)
let capo3= new Vestiti (3,1181,"inverno","felpa",1229,8,"beige",17.50,21.35,"negozio",50)

console.log(capo1)
console.log(`Lo sconto è di ${capo1.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo1.getAcquistoCapo()} €`)

console.log(capo2)
console.log(`Lo sconto è di ${capo2.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo2.getAcquistoCapo()} €`)

console.log(capo3)
console.log(`Lo sconto è di ${capo3.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo3.getAcquistoCapo()} €`)


