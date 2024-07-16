const url = 'https://pokeapi.co/api/v2/pokemon';

function getPokemon(id) {
    return fetch(`${url}/${id}`)
        .then(data => data.json())
        .then(data => data);
}

async function getPokemon2(id) {
    const json = await fetch(`${url}/${id}`);
    const data = await json.json();
    return data.name;
}

getPokemon2(25).then(name => {
    document.getElementById('name').innerHTML = name;
    console.log(name)
})
function getImageID(id) {
    console.log(id);
    const imageString = '00' + id;
    return imageString.slice(-3);
}

async function generateButtons(number, pokemonId) {
    let buttons = [];
    let randoms = [];
    html = ``;

    for (let i = 0; i < number; i++) {
        let randomId = Math.floor(Math.random() * 1000) + 1;

        randoms.push(randomId);

        buttons.push(getPokemon2(randomId).then(name => {
            return `<button onclick="guessPokemon(${randomId}, ${pokemonId})">${name}</button>`;
        }));
    }
    // Añadir el botón específico con pokemonId en una posición aleatoria
    let specificButton = await getPokemon2(pokemonId).then(name => {
        return `<button onclick="guessPokemon(${pokemonId}, ${pokemonId})">${name}</button>`;
    });

    let randomIndex = Math.floor(Math.random() * (number + 1));
    buttons.splice(randomIndex, 0, specificButton);

    const resolvedButtons = await Promise.all(buttons);
    const containerButtons = document.getElementById('guess-pokemon');
    containerButtons.innerHTML = resolvedButtons.join('');
}
function guessPokemon(randomId, pokemonId) {
    var container = document.getElementById("result");
    var buttons = document.getElementById("guess-pokemon");
    if (randomId == pokemonId) {
        let pokeImage = document.getElementById(`pokeImage${pokemonId}`);
        buttons.innerHTML = `YOU WIN!!`;
        pokeImage.style.filter = "brightness(1)";
        container.innerHTML = `YOU WIN!`;
    } else {
        container.innerHTML = `YOU LOSE!`;
    }
}

function search() {
    const pokemonId = document.getElementById('pokemon-id').value;
    const id = getImageID(pokemonId);

    getPokemon(pokemonId).then(data => {
        if (data) {
            const pokemonInfoDiv = document.getElementById('pokemon-info');
            pokemonInfoDiv.innerHTML = `
          <img class ="hide" id="pokeImage${pokemonId}" src= ${"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + id + ".png"}>
          <p>Height: ${data.height}</p>
          <p>Weight: ${data.weight}</p>
          <p>Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        `;
        }
    });

    generateButtons(10, pokemonId);
}
