document.getElementById('fetchButton').addEventListener('click', fetchCharacter);

function fetchCharacter() {
    const loading = document.getElementById('loading');
    const characterInfo = document.getElementById('characterInfo');
    const error = document.getElementById('error');

    loading.classList.remove('hidden');
    characterInfo.classList.add('hidden');
    error.classList.add('hidden');

    const randomId = Math.floor(Math.random() * 83) + 1;
    fetch(`https://www.swapi.tech/api/people/${randomId}`)
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                displayCharacter(data.result.properties);
            } else {
                showError();
            }
        })
        .catch(showError)
        .finally(() => loading.classList.add('hidden'));
}

function displayCharacter(character) {
    document.getElementById('name').textContent = character.name;
    document.getElementById('height').textContent = character.height;
    document.getElementById('gender').textContent = character.gender;
    document.getElementById('birthYear').textContent = character.birth_year;
    fetch(character.homeworld)
        .then(response => response.json())
        .then(data => {
            document.getElementById('homeWorld').textContent = data.result.properties.name;
        });

    document.getElementById('characterInfo').classList.remove('hidden');
}

function showError() {
    document.getElementById('error').classList.remove('hidden');
}
