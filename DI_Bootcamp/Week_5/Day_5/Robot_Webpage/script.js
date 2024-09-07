const robots = [
    { name: 'Nicholas', image: 'c2j.png', info: 'Info about Nicholas' },
    { name: 'Sophia', image: 'vso.png', info: 'Info about Sophia' },
    { name: 'Adam', image: 'oc8.png', info: 'Info about Adam' },
    // Add more robots as needed
];

const robotContainer = document.getElementById('robotContainer');
const searchBox = document.getElementById('searchBox');

function displayRobots(robots) {
    robotContainer.innerHTML = '';
    robots.forEach(robot => {
        const robotCard = document.createElement('div');
        robotCard.classList.add('robot-card');
        
        const robotImage = document.createElement('img');
        robotImage.src = robot.image;
        robotCard.appendChild(robotImage);
        
        const robotName = document.createElement('h2');
        robotName.textContent = robot.name;
        robotCard.appendChild(robotName);
        
        const robotInfo = document.createElement('p');
        robotInfo.textContent = robot.info;
        robotCard.appendChild(robotInfo);
        
        robotContainer.appendChild(robotCard);
    });
}

searchBox.addEventListener('input', () => {
    const searchTerm = searchBox.value.toLowerCase();
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchTerm));
    displayRobots(filteredRobots);
});

// Initial display
displayRobots(robots);
