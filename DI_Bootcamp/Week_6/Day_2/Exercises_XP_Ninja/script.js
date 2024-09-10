document.getElementById('gifForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const category = document.getElementById('category').value;
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const gifContainer = document.getElementById('gifContainer');
        gifContainer.innerHTML = '';
        data.data.forEach(gif => {
            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            gifContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Fetch error:', error);
    }
});

document.getElementById('deleteButton').addEventListener('click', function() {
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = '';
});