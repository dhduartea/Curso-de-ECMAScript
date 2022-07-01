//es 12

//EJ1-replaceAll

const string="Javascript es maravilloso, con Javascript, puedo crear el futuro de la Web!";
const replacedString=string.replace("Javascript", "Python");
console.log(replacedString);

const replacedAllString=string.replaceAll("Javascript", "Python");
console.log(replacedAllString);

//EJ2-Métodos privados

class Message{
    show(val){
        console.log(val);
    };
    #show2(val){
        console.log(val);
    }
    get #add(){
        this.#show2;
    }
};

const message = new Message();
message.show("Holis");

//EJ3 Promise.any
    //retorna el primer valor que se resuelva
const promiseNew1=new Promise((resolve, reject) => {
    reject("1")
});
const promiseNew2=new Promise((resolve, reject) => {
    resolve("2")
});
const promiseNew3=new Promise((resolve, reject) => {
    resolve("3")
});

Promise.any([promiseNew1,promiseNew2,promiseNew3])
    .then(response => console.log(response));

//EJ4 WeakRef

class anyClass{
    constructor(element){
        this.ref=new WeakRef(element);
    } 
}

//EJ5 
    //mas info https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue ||= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue &&= isFalse);
