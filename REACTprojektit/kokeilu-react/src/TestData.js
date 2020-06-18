var testi = {nimi:"Aleksi K", ika:27}
var auto ={merkki:"Mersu", malli:": DDDDDD"}

function summa(a,b){
    return a+b
}

let summaNuoli = (a,b) =>{
    return a+b
}

let typistettusummaNuoli = (a,b) => a+b

function isPositive(number){
    return number>=0
}

let isNuoliPositive = number => number>=0


function randomNumber(){
    return Math.random
}

let randomNumber = () => Math.random


document.addEventListener('click', function(){
    console.log('click')
})

document.addEventListener('click', ()=> console.log('click'))

export default {testi, auto}