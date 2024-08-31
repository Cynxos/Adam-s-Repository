// Retrieve the div and console.log it
const containerDiv = document.getElementById('container');
console.log(containerDiv);

const firstList = document.querySelector('.list');
firstList.children[1].textContent = 'Richard';

const secondList = document.querySelectorAll('.list')[1];
secondList.children[1].remove();

const lists = document.querySelectorAll('.list');
lists.forEach(list => {
    list.children[0].textContent = 'YourName'; 
});

lists.forEach(list => {
    list.classList.add('student_list');
});

firstList.classList.add('university', 'attendance');

containerDiv.style.backgroundColor = 'lightblue';
containerDiv.style.padding = '10px';

const danLi = secondList.children[2];
if (danLi.textContent === 'Dan') {
    danLi.style.display = 'none';
}

const richardLi = firstList.children[1];
if (richardLi.textContent === 'Richard') {
    richardLi.style.border = '1px solid black';
}

document.body.style.fontSize = '16px';

if (containerDiv.style.backgroundColor === 'lightblue') {
    const users = Array.from(containerDiv.nextElementSibling.children).map(li => li.textContent);
    alert(`Hello ${users.join(' and ')}`);
}
