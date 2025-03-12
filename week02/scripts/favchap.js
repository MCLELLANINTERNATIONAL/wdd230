// Select input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', (event) => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.classList.add('list-item');
        deleteButton.classList.add('delete');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
        input.focus();
    } else {
        alert('Please enter a book and chapter.');
        input.focus();
    }
});
