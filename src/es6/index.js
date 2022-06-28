//EJ1

function newFunction(name, age, country) {
    var name =name||"David";
    var age =age||32;
    var country =country||"Colombia";
    console.log(name, age, country);
}
    
// Es6

function newFunction2(name="David", age=32, country="Colombia") {
    console.log(name, age, country);
}

//EJ2

newFunction2();
newFunction2("Juan", 40, "MX");

let hello="Hello";
let world="world!";
let epicPhrase=hello+" "+world;
console.log(epicPhrase);

let epicPhrase2=`${hello} ${world}`
console.log(epicPhrase2);

//EJ3

let lorem="Quiero escribir una frase epíca que pueda separar por párrafos \n"
    +"segunda frase épica";
console.log(lorem);

let lorem2=`Quiero escribir una frase epíca que pueda separar por párrafos 
segunda frase épica`;
console.log(lorem2);

//EJ4

let person={
    "name":"David",
    "age":25,
    "country":"Colombia"
}
console.log(person.name, person.country);

let{name,age,country}=person;
console.log(name, age, country);

//EJ5 

let team1=["Pablo", "Raul", "Dario"];
let team2=["Miguel", "Pedro", "Pipe"];
let education=["David", ...team1, ...team2];

console.log(education)

    //https://dev.to/sagar/three-dots---in-javascript-26ci

//EJ6