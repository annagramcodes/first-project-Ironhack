function render() {
    function getRandomInt(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

let randomNumber = getRandomInt(1, 650);

let container = document.getElementById('pokemon');
container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${randomNumber}.svg">`
}

render();

let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');

prevBtn.onclick = function() { render();}
nextBtn.onclick = function() { render();}

