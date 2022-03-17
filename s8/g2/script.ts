
class SonAccount{
    public balanceInit:number;
    public primaOperazione: number;
    public secondaOperazione: number;
    public terzaOperazione: number;
    public quartaOperazione: number;

    constructor(balanceInit:number, primaOperazione:number, secondaOperazione:number, terzaOperazione:number, quartaOperazione:number){
        this.balanceInit = balanceInit;
        this.primaOperazione = primaOperazione;
        this.secondaOperazione = secondaOperazione;
        this.terzaOperazione = terzaOperazione;
        this.quartaOperazione = quartaOperazione;
    }

    oneDeposit(sommaAggiunta:number):number{
        this.primaOperazione = this.balanceInit + sommaAggiunta;
        return this.balanceInit += sommaAggiunta;
    }

    oneWithDraw(sommaPrelevata:number):number{
        this.secondaOperazione = this.balanceInit + sommaPrelevata;
        return this.balanceInit -= sommaPrelevata;
    }

    twoDeposit(sommaAggiunta2:number):number{
        this.terzaOperazione = this.balanceInit + sommaAggiunta2;
        return this.balanceInit += sommaAggiunta2;
    }
    twoWithDraw(sommaPrelevata2:number):number{
        this.quartaOperazione = this.balanceInit + sommaPrelevata2;
        return this.balanceInit -= sommaPrelevata2;
    }


    
    }

    class MotherAccount extends SonAccount{
        public interest: number;

        constructor(balanceInit:number, primaOperazione:number, secondaOperazione:number, terzaOperazione:number, quartaOperazione:number, interest: number){
        super(balanceInit, primaOperazione, secondaOperazione, terzaOperazione, quartaOperazione);

        this.interest = interest;
    }
}*/




    /*class SonAccount{
    public balanceInit:number;
    public saldoAttuale:number;

    constructor(balanceInit:number, saldoAttuale:number){
        this.balanceInit = balanceInit;
        this.saldoAttuale = saldoAttuale;

        oneDeposit(balanceInit:number,):number{
            return this.balanceInit + this.saldoAttuale
        }
    }

    /*versamento 
    oneDeposit(balanceInit:number):number{
        return this.balanceInit - saldoAttuale;

    }
    //prelievo
    oneWithDraw(sommaPrelevata:number):
    
}*/

class SonAccount{
    balance:number;
    constructor(balanceInit:number){
        this.balanceInit = balanceInit;
    }
    oneDeposit(versamentoUno:number):number{
        return(this.balanceInit = this.balanceInit + versamentoUno);
    }
}
