const jokeDiv = document.querySelector('.joke');
const jokeButton = document.querySelector('.btn')

generate();


jokeButton.addEventListener('click', generate);
 
async function generate() {
    try {
        const header = { 'Accept': 'application/json' };
        const response = await fetch("https://icanhazdadjoke.com", { headers: header });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        jokeDiv.innerHTML = data.joke;
    } catch (error) {
        jokeDiv.innerHTML = "Oops! Something went wrong. Please try again.";
        console.error('Error fetching joke:', error);
    }
}
