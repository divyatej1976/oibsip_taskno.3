function convertTemperature() {
    const degrees = parseFloat(document.getElementById('degrees').value);
    const type = document.getElementById('type').value;
    let result;

    if (type === 'Fahrenheit') {
        result = (degrees - 32) * 5 / 9; 
        document.getElementById('result').value = result.toFixed(4) + ' °C';
    } else {
        result = (degrees * 9 / 5) + 32; 
        document.getElementById('result').value = result.toFixed(4) + ' °F';
    }
}

function updatePlaceholder() {
    const type = document.getElementById('type').value;
    if (type === 'Fahrenheit') {
        document.getElementById('degrees').placeholder = "Enter Fahrenheit";
    } else {
        document.getElementById('degrees').placeholder = "Enter Celsius";
    }
}
