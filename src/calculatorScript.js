let display;
let clearOnNextButtonClick = false;

function clear() {
    display.value = '';
}

function evaluate() {
    try {
        var eva = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
        clearOnNextButtonClick = true;
        return; 
    }
    display.value = eva;
    clearOnNextButtonClick = true;
}

function append_value(value) {
    if (clearOnNextButtonClick) {
        display.value = '';
        clearOnNextButtonClick = false;
    }
    display.value += value;
}

document.addEventListener('DOMContentLoaded', () => {

    display = document.getElementById('result');
    document.querySelectorAll('.btn').forEach(button => {
        const value = button.getAttribute('data-value');

        if (value) {
            button.addEventListener('click', () => {
                append_value(value);
            });
        }
    });

    document.getElementById('clear').addEventListener('click', clear);
    document.getElementById('equals').addEventListener('click', evaluate);
});