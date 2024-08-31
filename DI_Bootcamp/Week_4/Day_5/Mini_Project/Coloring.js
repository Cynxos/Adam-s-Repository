// script.js
let selectedColor = '';
let isDrawing = false;
let canvasStates = [];
let currentStateIndex = -1;

document.querySelectorAll('.color').forEach(colorDiv => {
    colorDiv.addEventListener('click', () => {
        selectedColor = colorDiv.style.backgroundColor;
    });
});

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('mousedown', () => {
        isDrawing = true;
        if (selectedColor) {
            cell.style.backgroundColor = selectedColor;
            saveState();
        }
    });

    cell.addEventListener('mousemove', () => {
        if (isDrawing && selectedColor) {
            cell.style.backgroundColor = selectedColor;
        }
    });

    cell.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    cell.addEventListener('mouseleave', () => {
        if (isDrawing) {
            cell.style.backgroundColor = selectedColor;
        }
    });
});

document.body.addEventListener('mouseup', () => {
    isDrawing = false;
});

document.getElementById('clear-button').addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
    saveState();
});

document.getElementById('undo-button').addEventListener('click', () => {
    if (currentStateIndex > 0) {
        currentStateIndex--;
        restoreState(canvasStates[currentStateIndex]);
    }
});

function saveState() {
    const state = Array.from(document.querySelectorAll('.cell')).map(cell => cell.style.backgroundColor);
    canvasStates = canvasStates.slice(0, currentStateIndex + 1);
    canvasStates.push(state);
    currentStateIndex++;
}

function restoreState(state) {
    document.querySelectorAll('.cell').forEach((cell, index) => {
        cell.style.backgroundColor = state[index];
    });
}
