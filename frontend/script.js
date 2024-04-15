const Joi = require('joi');

const  emailAdd = document.getElementById('email');
const  password = document.getElementById('password');
// Define the validation schema
const signInSchema = Joi.object({
     email: Joi.string().email().required(),
     password: Joi.string().min(6).required(),
});

// Validate the sign-in form data
const validateSignInForm = (formData) => {
     
     const { error } = signInSchema.validate(formData);
     return error ? error.details[0].message : null;
};

// Usage example
const formData = {
     email: emailAdd.value,
     password: password.value,
};

const validationError = validateSignInForm(formData);
if (validationError) {
     console.error(validationError);
} else {
     console.log('Sign-in form is valid');
}