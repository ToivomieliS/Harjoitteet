var newPromise = new Promise((resolve, reject)=> {
    var n = 3
    n += 3

    if(n==5)
    {
        resolve("TOIMII")
    }
    else
    {
        reject("EI TOIMINUT")
    }

})

//newPromise.then(res => Onnistu(res)).catch(res => eiOnnistu(res))

function Onnistu(arg)
{console.log(arg)}

function eiOnnistu(arg){
    console.log("virhe! "+arg)
}

function uusPromiseParametrilla(luku){
    return new Promise((resolve,reject) =>{
   
    luku += 3

    if(n==6)
    {
        resolve(console.log("TOIMII"))
    }
    else
    {
        reject(console.log("EI TOIMINUT"))
    }
    })
}

uusPromiseParametrilla(6)