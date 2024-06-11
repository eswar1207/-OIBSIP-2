const display = document.getElementById('currentInput');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '=') {
            display.innerText = eval(display.innerText);
        } else if (button.innerText === 'C') {
            display.innerText = '0';
        } else if (button.innerText === '±') {
            display.innerText = parseFloat(display.innerText) * -1;
        } else if (button.innerText === '%') {
            display.innerText = parseFloat(display.innerText) / 100;
        } else {
            if (display.innerText === '0') {
                display.innerText = button.innerText;
            } else {
                display.innerText += button.innerText;
            }
        }
    });
});
