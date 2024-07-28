document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById('aceito');
    const nextButton = document.querySelector('.next-button');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            nextButton.disabled = false;
            nextButton.classList.add('enabled');
        } else {
            nextButton.disabled = true;
            nextButton.classList.remove('enabled');
        }
    });
});
