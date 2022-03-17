var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit, primaOperazione, secondaOperazione, terzaOperazione, quartaOperazione) {
        this.balanceInit = balanceInit;
        this.primaOperazione = primaOperazione;
        this.secondaOperazione = secondaOperazione;
        this.terzaOperazione = terzaOperazione;
        this.quartaOperazione = quartaOperazione;
    }
    SonAccount.prototype.oneDeposit = function (sommaAggiunta) {
        this.primaOperazione = this.balanceInit + sommaAggiunta;
        return this.balanceInit += sommaAggiunta;
    };
    SonAccount.prototype.oneWithDraw = function (sommaPrelevata) {
        this.secondaOperazione = this.balanceInit + sommaPrelevata;
        return this.balanceInit -= sommaPrelevata;
    };
    SonAccount.prototype.twoDeposit = function (sommaAggiunta2) {
        this.terzaOperazione = this.balanceInit + sommaAggiunta2;
        return this.balanceInit += sommaAggiunta2;
    };
    SonAccount.prototype.twoWithDraw = function (sommaPrelevata2) {
        this.quartaOperazione = this.balanceInit + sommaPrelevata2;
        return this.balanceInit -= sommaPrelevata2;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit, primaOperazione, secondaOperazione, terzaOperazione, quartaOperazione, interest) {
        var _this = _super.call(this, balanceInit, primaOperazione, secondaOperazione, terzaOperazione, quartaOperazione) || this;
        _this.interest = interest;
        return _this;
    }
    return MotherAccount;
}(SonAccount));
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
