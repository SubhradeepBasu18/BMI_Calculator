const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const result = document.querySelector('#result');

        if (height <= 0 || isNaN(height)) {
            result.innerHTML = 'Please enter a valid height';
        } else if (weight <= 0 || isNaN(weight)) {
            result.innerHTML = 'Please enter a valid weight';
        } else {
            const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2); 

            result.innerHTML = `Your BMI is ${bmi}`;

            // Provide weight guide
            let weightGuide = '';
            if (bmi < 18.6) {
                weightGuide = 'Underweight';
            } else if (bmi >= 18.6 && bmi <= 24.9) {
                weightGuide = 'Normal Range';
            } else {
                weightGuide = 'Overweight';
            }
            result.innerHTML += `<br/><br/>Weight Status: ${weightGuide}`;
        }
    });
