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

function generateButtons(poke1,poke2,poke3){
    const container = document.getElementById('container');

    container.innerHTML = `
        <button onclick="search()">${poke1}</button>
        <button onclick="search()">${poke2}</button>
        <button onclick="search()">${poke3}</button>
    `;
}

function search() {
    const pokemonId = document.getElementById('pokemon-id').value;
    const id = getImageID(pokemonId);

    getPokemon(pokemonId).then(data => {
        if (data) {
            const pokemonInfoDiv = document.getElementById('pokemon-info');
            pokemonInfoDiv.innerHTML = `
          <img class ="hide" src= ${"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + id + ".png"}>
          <p>Height: ${data.height}</p>
          <p>Weight: ${data.weight}</p>
          <p>Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        `;
        }
    });
    generateButtons("1","2","3");
}
