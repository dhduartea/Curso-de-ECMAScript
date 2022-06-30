//es9 

//EJ1--Parámetro rest

const obj={
    "name":"David",
    "age":25,
    "country":"Colombia",
};
let{name,...rest}=obj;//rest, objeto desestructurado
console.log(name, rest);// output-- David { age: 25, country: 'Colombia' }
let{country,...otro}=obj;
console.log(country, otro);//Colombia { name: 'David', age: 25 }

//EJ2--

const objeto={
    "name":"David",
    "age":25,
    
};
const objeto1={
    ...objeto,
    "country":"Colombia",
};
console.log(objeto);//{ name: 'David', age: 25 }
console.log(objeto1);//{ name: 'David', age: 25, country: 'Colombia' }


//EJ3--Promise-finaly

const helloWorld=()=>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => {resolve("Hello World")}, 2000)
        : reject(new Error("Test Error!"));
    })
};
helloWorld()
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log("Finalizado"));


//EJ4--Regex-manejo de fechas

const regexData=/([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match=regexData.exec('2022-06-30');
console.log(match);

    // Como se puede ver nos saltamos el primer espacio ya que lo que nos regresa
    // dateRegex.exec(dateString) en el indice 0 es justamente el string que le pasamos por parametro
    // tambien para evitar futuros errores utilizamos el operador || para que si se da el caso en que 
    // dateRegex.exec(dateString) retorne null no nos de error el querer hacer el destructuring
const [ , year, month, day] = dateRegex.exec(dateString) || []

console.log(`day: ${day}, month: ${month}, year: ${year}`)