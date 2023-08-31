let operator = '';
let value = '';
let buffer = '';

const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.id) {
            case 'clear':
                value = '';
                operator = '';
                buffer = '';
                display.value = '';
                break;
            case 'equals':
                executeOperation();
                break;
            default:
                handleInput(e.target.value);
                break;
        }
    });
});

function handleInput(input) {
    if(isNaN(parseInt(input))) {
        if(operator === '') {
            operator = input;
            buffer = value;
            value = '';
        } else {
            executeOperation();
            operator = input;
        }
    } else {
        value += input;
    }
    display.value = value;
}

function executeOperation() {
    buffer = parseInt(buffer);
    value = parseInt(value);

    switch(operator) {
        case '+':
            value = buffer + value;
            break;
        case '-':
            value = buffer - value;
            break;
        case '*':
            value = buffer * value;
            break;
        case '/':
            value = buffer / value;
            break;
    }

    display.value = value;
    operator = '';
}