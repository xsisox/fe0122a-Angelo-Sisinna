var nome = "Luke";
console.log(nome);

{
    let nome = "Anakin";

}



//-------------CONST---------------------------------------------------

var cognome = "Obi one";

{
    const cognome = "chubeka";
    console.log(cognome);
}

{
    const cognome = "c3po";
    console.log(cognome);
}

//-------------BOOLEANI------------------------------------------------

var oggetto1 = "frutta"
var oggetto2 = "verdura"

var primo_comp = oggetto1 == oggetto2;

console.log(primo_comp); //true
console.log(!primo_comp); //false

console.log(oggetto1==oggetto2 || oggetto1 == "frutta"); //or

console.log(oggetto1==oggetto2 && oggetto1 == "frutta"); //and

//-------------COMPARATIVI----------------------------------------------------------------

var numb1 = 80;
var numb2 = 55.5; 

console.log(numb1 > numb2);

console.log(numb1 < numb2);

console.log(numb1 == numb2);

//-------------MATEMATICI----------------------------------------------------------------

var numb3 = 100;
var numb4 = 40;
var differenza = (numb3 -= numb4)
console.log(differenza);
