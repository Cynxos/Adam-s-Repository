let currentPokemonId = 1;

document.getElementById('random-button').addEventListener('click', function() {
    const randomId = Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon in the PokéAPI
    fetchPokemonData(randomId);
});

document.getElementById('prev-button').addEventListener('click', function() {
    if (currentPokemonId > 1) {
        currentPokemonId--;
        fetchPokemonData(currentPokemonId);
    }
});

document.getElementById('next-button').addEventListener('click', function() {
    if (currentPokemonId < 898) {
        currentPokemonId++;
        fetchPokemonData(currentPokemonId);
    }
});

function fetchPokemonData(pokemonId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => {
            currentPokemonId = data.id;
            displayPokemonData(data);
        })
        .catch(error => console.error('Error:', error));
}

function displayPokemonData(data) {
    const pokemonDataDiv = document.getElementById('pokemon-data');
    pokemonDataDiv.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
        <p>Base Experience: ${data.base_experience}</p>
    `;
}

fetchPokemonData(currentPokemonId);
