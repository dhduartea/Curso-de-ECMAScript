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

export let hello="Hello";
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

let name1 ="Karen";
let age1 =24;
    //es5
obj1 ={name:name1, age:age1};
console.log(obj1);
    //es6
obj2={name1, age1};
console.log(obj2);

//EJ7
const names=[ {name:"Karen", age:24}, {name:"David", age:25}];
let listNames=names.map(function (item) {
    console.log(item.name);
})

let listNames2=names.map(item=>console.log(item.name));

//EJ8

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey')
        } else {
            reject('Ups')
        }
    })
}

helloPromise()
    .then( response => console.log(response))
    .catch(error => console.log(error));
    
    // Una promesa es un objeto que representa el resultado de una operación asíncrona y tiene 3 estados posibles:

    // Pendiente.
    // Resuelta.
    // Rechazada.
    // Tienen la particularidad de que se pueden encadenar (then), siendo el resultado de una promesa, los datos de entrada de otra posible función.
    
    // Las promesas mantienen un código más legible y mantenible que las callbacks, además tienen un mecanismo para la detección de errores (catch) que es posible usar en cualquier parte del flujo de datos.

//EJ9-clases

class calculator{
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA,valueB){
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA+this.valueB;
    }
    multiply=()=>(this.valueA*this.valueB)
}
const calc = new calculator();
console.log(calc.sum(2,4));
console.log(calc.multiply(2,4));

    //EJ10-modulos

    //You should use this script in html with the type module ,
    //eg ''<script type="module" src="demo.js"></script>",
    //open the page in a httpserver,otherwise there will be a CORS policy error.
    //script demo.js

import { cube, foo, graph } from 'module';
graph.options = {
    color:'blue',
    thickness:'3px'
};
graph.draw();
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888

    //Old sintaxis
const hello = require('./module');

console.log(hello());

//EJ11

function* nombre(param){
    yield (1)
    yield (2)
    
    yield ("último valor retornado")
    }
    //Crear el generador
    const generador = nombre()
    
    // Invocacioens
    console.log(generador.next().value);  //primer valor retornado
    console.log(generador.next().value);  
    console.log(generador.next().value);  
    console.log(generador.next().value);  