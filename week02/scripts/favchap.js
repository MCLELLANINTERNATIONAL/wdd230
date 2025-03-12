// Select input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to the button
button.addEventListener('click', () => {
    // Check if input is not blank
    if (input.value.trim() !== '') {
        // Create li element
        const li = document.createElement('li');

        // Create delete button
        const deleteButton = document.createElement('button');

        // Add class styling
        li.classList.add('list-item');
        deleteButton.classList.add('delete');

        // Populate li with input value
        li.textContent = input.value;

        // Populate delete button with ❌
        deleteButton.textContent = '❌';

        // Append delete button to li
        li.appendChild(deleteButton);

        // Append li to list
        list.appendaChild(li);

        // Add event listener to delete button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        // Reset input field
        input.value = '';

        // Send focus back to input
        input.focus();
    } else {
        // Optional: Provide user feedback if input is blank
        alert('Please enter a book and chapter.');
        input.focus();
    }
});
