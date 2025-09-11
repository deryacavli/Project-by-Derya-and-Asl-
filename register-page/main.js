function selectOption(selectedElement) {
    const allOptions = document.querySelectorAll('.check');

    allOptions.forEach(option=> option.classList.remove('selected'));

    selectedElement.classList.add('selected');
}