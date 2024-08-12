// Handle the progress bar and step transitions
let currentStep = 1;
const totalSteps = 4;
const userDetailsDiv = document.querySelector('.user-details');

function nextStep() {
    if (validateStep1Inputs()) {
        currentStep++;
        showStep(currentStep);
        updateProgressBar();
    }
}

function previousStep() {
    currentStep--;
    showStep(currentStep);
    updateProgressBar();
}

function showStep(step) {
    for (let i = 1; i <= totalSteps; i++) {
        const stepElement = document.getElementById(`step${i}`);
        stepElement.style.display = i === step ? 'block' : 'none';
    }

    if (step === totalSteps) {
        document.querySelector('.submit-button').style.display = 'inline-block';
    }
}

function updateProgressBar() {
    const progressElement = document.querySelector('.progress');
    progressElement.style.width = `${(currentStep / totalSteps) * 100}%`;
    document.querySelector('.step-indicator').textContent = `Step ${currentStep} of ${totalSteps}`;
}

function validateStep1Inputs() {
    const step1Inputs = document.querySelectorAll('[data-step="1"]');
    let valid = true;

    // Check if required fields are empty
    step1Inputs.forEach(input => {
        if (input.value.trim() === '') {
            valid = false;
            input.style.borderColor = 'red';
            showErrorMessage(input, `${input.getAttribute('data-label')} is required.`);
        } else {
            input.style.borderColor = '';
            removeErrorMessage(input);
        }
    });

    const ageInput = document.getElementById('ageInput');
    const emailInput = document.getElementById('emailInput');

    // Validate age: should be a number and less than or equal to 100
    if (!/^\d+$/.test(ageInput.value) || parseInt(ageInput.value) > 100) {
        valid = false;
        ageInput.style.borderColor = 'red';
        showErrorMessage(ageInput, 'Please enter a valid age (a number less than or equal to 100).');
    } else {
        ageInput.style.borderColor = '';
        removeErrorMessage(ageInput);
    }

    // Validate email: must include "@gmail.com"
    const emailPattern = /^[^\s@]+@gmail\.com$/;
    if (!emailPattern.test(emailInput.value)) {
        valid = false;
        emailInput.style.borderColor = 'red';
        showErrorMessage(emailInput, 'Please enter a valid Gmail address (e.g., user@gmail.com).');
    } else {
        emailInput.style.borderColor = '';
        removeErrorMessage(emailInput);
    }

    return valid;
}

function showErrorMessage(input, message) {
    removeErrorMessage(input); // Remove any existing error message
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    input.parentNode.insertBefore(errorMessage, input.nextSibling);
}

function removeErrorMessage(input) {
    const nextElement = input.nextSibling;
    if (nextElement && nextElement.className === 'error-message') {
        nextElement.remove();
    }
}

function submitForm() {
    if (validateStep1Inputs()) {
        displayUserDetails();
        document.getElementById('step4').style.display = 'none';
        document.getElementById('thankYou').style.display = 'block';
        userDetailsDiv.style.display = 'block';
    }
}

function displayUserDetails() {
    userDetailsDiv.innerHTML = ''; // Clear previous details

    for (let i = 1; i <= totalSteps; i++) {
        const inputs = document.querySelectorAll(`[data-step="${i}"]`);
        inputs.forEach(input => {
            const label = input.getAttribute('data-label');
            const value = input.value || 'Not provided';
            userDetailsDiv.innerHTML += `<p><strong>${label}:</strong> ${value}</p>`;
        });
    }

    // Add a close button
    userDetailsDiv.innerHTML += `<button class="close-button" onclick="closeDetails()">Close</button>`;
}

function closeDetails() {
    alert('Profile created successfully!');
    location.reload(); // Refresh the page
}
