document.getElementById("libform").addEventListener("submit", function(event) {
    event.preventDefault();

    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;

    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill in all the fields.");
        return;
    }

    const story = `${person} went to the ${place} to ${verb} a ${adjective} ${noun}.`;
    document.getElementById("story").textContent = story;
});

const stories = [
    "Once upon a time, ${person} decided to ${verb} at the ${place} with a ${adjective} ${noun}.",
    "In a ${adjective} ${place}, ${person} found a ${noun} and decided to ${verb} it.",
    "${person} couldn't believe their eyes when they saw a ${adjective} ${noun} ${verb}ing at the ${place}.",
];

document.getElementById("shuffle-button").addEventListener("click", function() {
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;

    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill in all the fields.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * stories.length);
    const story = stories[randomIndex]
        .replace("${noun}", noun)
        .replace("${adjective}", adjective)
        .replace("${person}", person)
        .replace("${verb}", verb)
        .replace("${place}", place);

    document.getElementById("story").textContent = story;
});
