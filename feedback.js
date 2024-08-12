document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackPreview = document.getElementById("feedback-preview");
    const previewButton = document.querySelector("button[type='submit']");
    const resetButton = document.querySelector("button[type='reset']");
    const editButton = document.getElementById("edit-feedback");
    const submitButton = document.getElementById("submit-feedback");

    const fieldsToPreview = [
        { formField: "username", previewField: "preview-username" },
        { formField: "email", previewField: "preview-email" },
        { formField: "recommend", previewField: "preview-recommend" },
        { formField: "comment", previewField: "preview-comment" },
        { formField: "rating", previewField: "preview-rating" },
        { formField: "offers", previewField: "preview-offers" },
        { formField: "additonal-comment", previewField: "preview-additional-comment" }
    ];

    previewButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (validateForm()) {
            feedbackForm.style.display = "none";
            feedbackPreview.style.display = "block";

            fieldsToPreview.forEach(field => {
                const formElement = feedbackForm.elements[field.formField];
                const previewElement = document.getElementById(field.previewField);

                if (formElement.type === "radio") {
                    const selectedOption = feedbackForm.querySelector(`input[name="${field.formField}"]:checked`);
                    previewElement.textContent = selectedOption ? selectedOption.value : "";
                } else {
                    previewElement.textContent = formElement.value;
                }
            });
        }
    });

    editButton.addEventListener("click", () => {
        feedbackPreview.style.display = "none";
        feedbackForm.style.display = "block";
    });

    submitButton.addEventListener("click", () => {
        alert("Your Feedback Has Been Successfully Submitted!");
        feedbackForm.reset();
        feedbackPreview.style.display = "none";
        feedbackForm.style.display = "block";
    });

    resetButton.addEventListener("click", () => {
        feedbackForm.reset();
    });

    function validateForm() {
        let isValid = true;
        fieldsToPreview.forEach(field => {
            const formElement = feedbackForm.elements[field.formField];
            const errorMessage = document.getElementById(`${field.formField}-error`);

            if (errorMessage) {
                errorMessage.remove();
            }

            if (formElement.value.trim() === "") {
                isValid = false;
                const error = document.createElement("span");
                error.id = `${field.formField}-error`;
                error.style.color = "red";
                error.textContent = "This field is required.";
                formElement.parentElement.appendChild(error);
            } else {
                if (field.formField === "username" && !/^[a-zA-Z0-9]+$/.test(formElement.value)) {
                    isValid = false;
                    const error = document.createElement("span");
                    error.id = `${field.formField}-error`;
                    error.style.color = "red";
                    error.textContent = "Username can only contain letters and numbers.";
                    formElement.parentElement.appendChild(error);
                }

                if (field.formField === "email" && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formElement.value)) {
                    isValid = false;
                    const error = document.createElement("span");
                    error.id = `${field.formField}-error`;
                    error.style.color = "red";
                    error.textContent = "Please enter a valid email address.";
                    formElement.parentElement.appendChild(error);
                }
            }
        });
        return isValid;
    }
});
