document.addEventListener('DOMContentLoaded', () => {
    const planets = [
        { name: 'Mercury', color: 'gray', moons: [] },
        { name: 'Venus', color: 'yellow', moons: [] },
        { name: 'Earth', color: 'blue', moons: ['Moon'] },
        { name: 'Mars', color: 'red', moons: ['Phobos', 'Deimos'] },
        { name: 'Jupiter', color: 'orange', moons: ['Io', 'Europa', 'Ganymede', 'Callisto'] },
        { name: 'Saturn', color: 'goldenrod', moons: ['Titan', 'Enceladus', 'Mimas'] },
        { name: 'Uranus', color: 'lightblue', moons: ['Miranda', 'Ariel', 'Umbriel', 'Titania', 'Oberon'] },
        { name: 'Neptune', color: 'darkblue', moons: ['Triton', 'Nereid'] }
    ];

    const section = document.querySelector('.listPlanets');

    planets.forEach(planet => {
        const planetDiv = document.createElement('div');
        planetDiv.classList.add('planet');
        planetDiv.style.backgroundColor = planet.color;
        planetDiv.textContent = planet.name;

        planet.moons.forEach((moon, index) => {
            const moonDiv = document.createElement('div');
            moonDiv.classList.add('moon');
            moonDiv.style.left = `${(index + 1) * 40}px`;
            moonDiv.style.top = `${(index + 1) * 40}px`;
            moonDiv.textContent = moon;
            planetDiv.appendChild(moonDiv);
        });

        section.appendChild(planetDiv);
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
