document.getElementById('userProfileForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting if validation fails
    event.preventDefault();

    // Retrieve form values
    const fullName = document.getElementById('fullName').value.trim();
    const age = parseInt(document.getElementById('age').value, 10);
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate age (should be a number between 1 and 100)
    if (isNaN(age) || age < 1 || age > 100) {
        alert('Please enter a valid age between 1 and 100.');
        return;
    }

    // Validate email format using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password (should be at least 8 characters long)
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // If all validations pass, show an alert and refresh the page
    alert('Successfully registered');
    // Uncomment the next line if you want to submit the form after validation
    // this.submit();
});
