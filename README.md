
# Password Strength Checker

This project is a simple web-based password strength checker. It provides real-time feedback on the strength of a user's password based on several criteria, such as length, the presence of uppercase and lowercase letters, digits, and special characters. The strength is visually represented using a color-coded meter.

## Features

- **Password Strength Meter**: The meter dynamically updates as the user types, changing color and width based on the strength of the password.
- **Criteria Considered**:
  - Password length (minimum 8 characters)
  - Presence of uppercase letters
  - Presence of lowercase letters
  - Presence of digits
  - Presence of special characters

## Files

- `index.html`: The main HTML file that contains the structure of the web page.
- `styles.css`: The CSS file that styles the HTML elements and the password strength meter.
- `script.js`: The JavaScript file that handles the password strength calculation and updates the meter dynamically.

## Installation and Usage

### 1. Clone the Repository

```
git clone https://github.com/your-username/password-strength-checker.git
cd password-strength-checker
```

### 2. Open the HTML File

Simply open the `index.html` file in your web browser:

```
open index.html
```

Alternatively, you can drag and drop the `index.html` file into your browser.

### 3. Test the Password Strength

- Start typing a password in the input field.
- The strength meter will adjust based on the strength of the password:
  - **Weak (Red)**: Minimum of one criteria met.
  - **Medium (Orange)**: Two to three criteria met.
  - **Strong (Green)**: Four criteria met.

## Customization

You can easily customize the criteria for password strength in the `script.js` file by adjusting the logic in the `checkPasswordStrength` function.

## License

This project is open-source and available under the [MIT License](LICENSE).
