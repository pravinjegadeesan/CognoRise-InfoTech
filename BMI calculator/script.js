function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = '<p>Please enter valid weight and height values.</p>';
        return;
    }

    const bmi = weight / ((height / 100) * (height / 100));
    let category;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 24.9 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    const resultMessage = `<p>Your BMI is: <strong>${bmi.toFixed(2)}</strong></p>
                           <p>You are categorized as: <strong>${category}</strong></p>`;
    document.getElementById('result').innerHTML = resultMessage;
}
