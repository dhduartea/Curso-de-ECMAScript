//es10

//EJ1--flat

let array=[1,2,3,[1,2,3,[1,2,3]]];
let salida1=array.flat(1);//permite aplanar arreglos
let salida2=array.flat(2);// 2=>profundidad, sepuede usar flat(Infinity), si no se sabe cuántos arreglos son
console.log(array);     //[ 1, 2, 3, [ 1, 2, 3, [ 1, 2, 3 ] ] ]
console.log(salida1);   //[ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(salida2);   //[ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]

//EJ2--flatMap

let array1=[1,2,3,4,5];
let output1=array1.map(value=>([value, value*2]));
    //[ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ], [ 5, 10 ] ]
let output2=array1.flatMap(value=>([value, value*2]));
    // [
    //     1, 2, 2, 4,  3,
    //     6, 4, 8, 5, 10
    // ]
console.log(output1);
console.log(output2);

//EJ3 --trim, Remover espacios en blanco, principio, y final

let hello="                 hello world         ";
console.log(hello);
console.log(hello.trimStart().trimEnd());
console.log(hello.trim());

//EJ4 Optional catch error

try {
    
} catch (error) {
    error
}
try {
    
} catch {
    error//disponible sin llamarlo como argumento
}

//EJ5--fromEntries

let entries=[["name", "David"], ["age", 25], ["country", "COL"]];
console.log(entries);
let fromEntries=Object.fromEntries(entries);
console.log(fromEntries);
console.log(Object.entries(fromEntries));

//EJ6--symbol

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol);
console.log(symbol.description);