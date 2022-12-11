//promises
//there are two condition sucess or failure
//fetch is method in promises to call API .
//means 2 thing happen data fullfilled or rejected.
//90% promise consumed na ki create.


//GET https: //icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', setHeader)
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         }).catch((error) => {
//             console.log(error);
//         })
// }

const generateJokes = async() => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (err) {
        console.log(`the error is ${err}`);
    }
}




jokeBtn.addEventListener('click', generateJokes);
generateJokes();