//Access elements using id
const addJokeBtn = document.getElementById('btn');
const showJoke = document.getElementById('joke');

//API url
const API = 'https://icanhazdadjoke.com/';

//API fetch method
async function addDadJokes(){
    try {
        const res = await fetch(API, {
            method: 'GET',
            headers: {
                'Accept':'application/json',
            }
        })
        const data = await res.json();
        showJoke.innerText = data.joke;
    } catch(error){
        console.error('Error :', error)
    }
      
}

//call function
addDadJokes();

//add click event to change jokes
addJokeBtn.addEventListener('click', addDadJokes)



