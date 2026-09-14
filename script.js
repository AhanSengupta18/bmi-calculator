document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get values from the inputs
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    const resultDisplay = document.getElementById('result-display');
    const bmiValueSpan = document.getElementById('bmi-value');
    const bmiCategorySpan = document.getElementById('bmi-category');

    // Validation: Check if inputs are realistic positive numbers
    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
        alert("Please enter valid, positive numbers for weight and height.");
        return;
    }

    // Calculate BMI using standard metric formula
    const bmi = weight / (height * height);
    
    // Display the calculation result rounded to 1 decimal point
    bmiValueSpan.textContent = bmi.toFixed(1);
    resultDisplay.classList.remove('hidden');

    // Determine health classification category
    if (bmi < 18.5) {
        bmiCategorySpan.textContent = "Underweight";
        bmiCategorySpan.style.color = "#ff5252";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategorySpan.textContent = "Normal Weight";
        bmiCategorySpan.style.color = "#69f0ae";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        bmiCategorySpan.textContent = "Overweight";
        bmiCategorySpan.style.color = "#ffd740";
    } else {
        bmiCategorySpan.textContent = "Obese";
        bmiCategorySpan.style.color = "#ff5252";
    }
});
