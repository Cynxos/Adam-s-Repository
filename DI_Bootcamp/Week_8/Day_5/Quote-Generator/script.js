let usedQuotes = [];

function getRandomQuote() {
    if (usedQuotes.length === quotes.length) {
        usedQuotes = [];
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (usedQuotes.includes(randomIndex));

    usedQuotes.push(randomIndex);
    return quotes[randomIndex];
}

function generateQuote() {
    console.log("Button clicked! Generating new quote...");
    const randomQuote = getRandomQuote();
    document.getElementById('quote').innerText = randomQuote.quote;
    document.getElementById('author').innerText = `- ${randomQuote.author}`;

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
    document.getElementById('quote').style.color = randomColor;
    document.getElementById('new-quote').style.backgroundColor = randomColor;
}

document.addEventListener('DOMContentLoaded', (event) => {
    generateQuote();
    document.getElementById('new-quote').addEventListener('click', generateQuote);
});
