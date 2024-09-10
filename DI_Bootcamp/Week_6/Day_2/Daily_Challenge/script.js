document.getElementById('gifForm').addEventListener('submit', fetchGif);
document.getElementById('deleteAllBtn').addEventListener('click', deleteAllGifs);

function fetchGif(event) {
    event.preventDefault();
    const category = document.getElementById('categoryInput').value;
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.fixed_height.url;
            appendGif(gifUrl);
        })
        .catch(error => console.error('Error fetching GIF:', error));
}

function appendGif(gifUrl) {
    const gifContainer = document.getElementById('gifContainer');
    const gifDiv = document.createElement('div');
    const gifImg = document.createElement('img');
    const deleteBtn = document.createElement('button');

    gifImg.src = gifUrl;
    deleteBtn.textContent = 'DELETE';
    deleteBtn.addEventListener('click', () => gifDiv.remove());

    gifDiv.appendChild(gifImg);
    gifDiv.appendChild(deleteBtn);
    gifContainer.appendChild(gifDiv);
}

function deleteAllGifs() {
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = '';
}
