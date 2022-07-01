//es11

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