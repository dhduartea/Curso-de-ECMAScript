//es11
    //link importante https://platzi.com/clases/1815-ecmascript-6/39727-ecmascript-2020-caracteristicas-importantes/

//EJ1-Dynamic import
    // Permite llamar nuestro código cuando lo necesitemos.

    // El archivo no se va a cargar de manera automatica.

    // Con esto podremos dividir nuestro codigo y evitar que la app sea muy grande.

    // Por todo lo anterior, mejora la performance.
const button=document.getElementById("btn");

button.addEventListener("click", async ()=>{
    const modulo= await import("./file.js");
    modulo.hello();
});

//EJ2-BigInt

const bigNumber=9007199254740991n;
const anotherBigNumber=BigInt(9007199254740991);

console.log(bigNumber);
console.log(anotherBigNumber);

//EJ3-Promise.allSettled 
    // permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.

const promise1=new Promise((resolve, reject) => {
    resolve("reject")
});
const promise2=new Promise((resolve, reject) => {
    resolve("resolve")
});
const promise3=new Promise((resolve, reject) => {
    resolve("reject 2")
});
Promise.allSettled([promise1,promise2,promise3])
    .then(response=>console.log(response));

//EJ3 globalThis

console.log(window);
console.log(globalThis);

//EJ4 Operador Nullish Coalescing

const fooo=null??"default String";
const fooo2="Hola"??"default String2";
const fooo3=null||"Default3";
console.log(fooo, fooo2, fooo3);

    // El operador OR (||) evalúa un valor falsey. Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "", false, NaN, undefined o null.
const id = 0

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

orId //  'Sin id'
nullishId // 0

//EJ5 -optional chaining 

const user={};
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log("temos email");
    
}else{
    console.log("no hay email");
}

