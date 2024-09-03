function PasswordValidation(password) {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharacterRegex = /[!@#$%^&*()_+]/;
    const numberRegex = /[0-9]/;
  
    // Check if password length is 7
    if (password.length < 7) {
      return false;
    }
  
    // Check for required characters
    if (!uppercaseRegex.test(password)) {
      return false;
    }
    if (!lowercaseRegex.test(password)) {
      return false;
    }
    if (!specialCharacterRegex.test(password)) {
      return false;
    }
    if (!numberRegex.test(password)) {
      return false;
    }
  
    // Password meets all criteria
    return true;
  }
  module.exports={
    PasswordValidation,
};