function postAThing()
{
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'}, 
        body: JSON.stringify({
            name: document.getElementById('kentta'),
            job: document.getElementById('kentta2'),
        })
    }).then(answerFromFetch =>{return answerFromFetch.JSON() } )
    .then(previousThenAnswer => console.log(previousThenAnswer) )
    .catch(ifPreviousThenFailed => console.log('Virhe!') )
}

function getAThing()
{
    fetch('https://reqres.in/api/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}, 

        })
    }).then(answerFromFetch =>{return answerFromFetch.JSON() } )
    .then(previousThenAnswer => console.log(previousThenAnswer) )
    .catch(ifPreviousThenFailed => console.log('Virhe!') )
}

