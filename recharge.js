function toggleOptions(optionId) {
    // Hide all options first
    const allOptions = document.querySelectorAll('.coins-grid');
    allOptions.forEach(option => {
        option.classList.add('hidden');
    });

    // Show the selected option
    const selectedOption = document.getElementById(optionId);
    if (selectedOption) {
        selectedOption.classList.toggle('hidden');
    }
}
