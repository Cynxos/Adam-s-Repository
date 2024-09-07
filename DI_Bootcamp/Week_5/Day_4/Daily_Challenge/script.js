function submitForm() {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;

    const data = {
        name: name,
        lastName: lastName
    };

    const jsonString = JSON.stringify(data);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = jsonString;
}