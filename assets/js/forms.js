const validateForm = (formId, fields) => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
        let isValid = true;
        fields.forEach(field => {
            const input = form.querySelector(`[name="${field.name}"]`);
            const errorDisplay = form.querySelector(`#${field.name}-error`);

            if (input && !field.validate(input.value)) {
                isValid = false;
                input.classList.add('border-red-500');
                if (errorDisplay) {
                    errorDisplay.textContent = field.message;
                    errorDisplay.classList.remove('hidden');
                }
            } else if (input) {
                input.classList.remove('border-red-500');
                input.classList.add('border-green-500');
                if (errorDisplay) {
                    errorDisplay.classList.add('hidden');
                }
            }
        });

        if (!isValid) {
            e.preventDefault();
        }
    });
};

// Common validations
const isEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
const isRequired = (val) => val.trim().length > 0;
const minLength = (len) => (val) => val.length >= len;

// Export or make available globally if not using modules
window.MusicSchoolForms = {
    validateForm,
    isEmail,
    isRequired,
    minLength
};
