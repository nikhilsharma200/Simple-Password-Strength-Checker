function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthMeter = document.getElementById('strength');
    let strength = 0;

    // Check for password length
    if (password.length >= 8) strength += 1;
    
    // Check for uppercase letters
    if (/[A-Z]/.test(password)) strength += 1;
    
    // Check for lowercase letters
    if (/[a-z]/.test(password)) strength += 1;
    
    // Check for digits
    if (/\d/.test(password)) strength += 1;
    
    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    // Update the strength meter based on the strength value
    if (strength === 0) {
        strengthMeter.className = 'strength-meter';
    } else if (strength === 1) {
        strengthMeter.className = 'strength-meter weak';
    } else if (strength === 2 || strength === 3) {
        strengthMeter.className = 'strength-meter medium';
    } else if (strength === 4) {
        strengthMeter.className = 'strength-meter strong';
    }
}
