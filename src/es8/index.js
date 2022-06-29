//es8

//EJ1-entries
const data={
    frontend:"David", 
    backend:"Pipe",
    design:"Karen",//,<-- Trailing comma
}
const entrie=Object.entries(data);
console.log(entrie, typeof(entrie),entrie[1], entrie.length);

//EJ2-values

const datos={
    frontend:"David", 
    backend:"Pipe",
    design:"Karen",//,<-- Trailing comma
}
const value=Object.values(datos);
console.log(value, value.length, typeof(value));

//EJ3- pad end start

const string="hello";
console.log(string.padStart(8,"hi "));
console.log(string.padEnd(8," hi"));
console.log(string.padEnd(8,"----"));

//EJ4-async

const helloWorld =() =>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('helloWorld'),3000)
        : reject(new Error ('Test Error'))
    })
}

const helloAsync =async() =>{
    const hello = await helloWorld();
    console.log(hello);

}
helloAsync();

    //Nos permitirá usar trycatch y trabajar los errores correctamente.

const another =async() =>{
    try{
        const hello = await helloWorld();
        console.log(hello);

    } catch (error){
        console.log(error);
        
    }
}

another();
    //Leer https://platzi.com/tutoriales/1789-asincronismo-js/5063-las-promesas-y-async-await-logicamente-no-son-iguales-y-te-explico-el-porque/
