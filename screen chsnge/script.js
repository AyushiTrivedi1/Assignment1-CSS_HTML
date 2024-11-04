const display_screen = document.getElementById('screen');
const clickable_button = document.getElementById('button');
const colors = ['blue', 'yellow', 'orange'];
let currentColorIndex = 0;

clickable_button.addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    display_screen.style.backgroundColor = colors[currentColorIndex];
});