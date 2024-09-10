const apiKey = 'dd8ccda285eb6da802ca1e81';
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');
const result = document.getElementById('result');
const convertButton = document.getElementById('convertButton');
const switchButton = document.getElementById('switchButton');

// Fetch supported currencies
fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
    .then(response => response.json())
    .then(data => {
        const codes = data.supported_codes;
        codes.forEach(code => {
            const option1 = document.createElement('option');
            option1.value = code[0];
            option1.textContent = code[1];
            fromCurrency.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = code[0];
            option2.textContent = code[1];
            toCurrency.appendChild(option2);
        });
    });

// Convert currency
convertButton.addEventListener('click', () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amountValue = amount.value;

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amountValue}`)
        .then(response => response.json())
        .then(data => {
            result.textContent = `${amountValue} ${from} = ${data.conversion_result} ${to}`;
        });
});

// Switch currencies
switchButton.addEventListener('click', () => {
    const from = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = from;
    convertButton.click();
});
