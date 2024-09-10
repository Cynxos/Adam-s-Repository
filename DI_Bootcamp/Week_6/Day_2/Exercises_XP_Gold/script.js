async function fetchRandomGif() {
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const gifUrl = data.data.images.original.url;

        const img = document.createElement('img');
        img.src = gifUrl;
        img.alt = 'Random GIF';

        document.getElementById('gif-container').appendChild(img);
    } catch (error) {
        console.error('Error fetching the GIF:', error);
    }
}

fetchRandomGif();