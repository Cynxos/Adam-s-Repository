const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const query = 'hilarious';
const rating = 'g';
const url = `https://api.giphy.com/v1/gifs/search?q=${query}&rating=${rating}&api_key=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
