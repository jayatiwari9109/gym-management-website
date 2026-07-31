// Mobile Navigation Toggle Handler
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        // Toggle menu open/close on hamburger click
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navLinks.classList.toggle('active');
        });

        // Close menu automatically when clicking any navigation link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navLinks.classList.remove('active');
            });
        });
    }
});

    /* ==========================================
       2. Interactive BMI Calculator
       ========================================== */
    const bmiForm = document.getElementById('bmi-form');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiResult = document.getElementById('bmi-result');
    const bmiScore = document.getElementById('bmi-score');
    const bmiCategory = document.getElementById('bmi-category');

    if (bmiForm) {
        bmiForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const height = parseFloat(heightInput.value); // height in cm
            const weight = parseFloat(weightInput.value); // weight in kg

            if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                alert('Please enter valid height and weight values.');
                return;
            }

            // BMI Formula: weight (kg) / [height (m)]^2
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

            // Determine health category and color indicator
            let category = '';
            let categoryColor = '';

            if (bmi < 18.5) {
                category = 'Underweight';
                categoryColor = '#ffc107'; // Yellow
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                category = 'Normal Weight (Healthy)';
                categoryColor = '#28a745'; // Green
            } else if (bmi >= 25 && bmi <= 29.9) {
                category = 'Overweight';
                categoryColor = '#fd7e14'; // Orange
            } else {
                category = 'Obese';
                categoryColor = '#dc3545'; // Red
            }

            // Update UI with calculated values
            bmiScore.textContent = bmi;
            bmiCategory.textContent = category;
            bmiCategory.style.color = categoryColor;

            // Display result box
            bmiResult.style.display = 'block';
        });
    }

    /* ==========================================
       3. Contact Form Submission (Mock Handler)
       ========================================== */
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! We will contact you shortly.');
            contactForm.reset();
        });
    }
});