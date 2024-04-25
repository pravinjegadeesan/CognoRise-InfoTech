let screenValue = '';

function appendToScreen(value) {
    screenValue += value;
    document.getElementById('screen').value = screenValue;
}

function clearScreen() {
    screenValue = '';
    document.getElementById('screen').value = screenValue;
}

function calculate() {
    let result;
    try {
        result = eval(screenValue);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('screen').value = result;
    screenValue = '';
}
