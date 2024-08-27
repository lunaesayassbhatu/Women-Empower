// Event listener for form submissions
document.querySelectorAll('.task-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const card = this.closest('.task-card');
        const description = card.querySelector('.task-input').value.trim();
        const name = card.querySelector('.name-input').value.trim();

        if (description === '' || name === '') {
            alert('Please enter a valid name and task.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = `${description} - ${name}`;
        listItem.innerHTML += '<button class="remove-btn">Remove</button>';

        // Add event listener for the remove button in newly added task
        listItem.querySelector('.remove-btn').addEventListener('click', function() {
            card.querySelector('.task-list').removeChild(listItem);
            saveTasks(); // Update local storage after removal
        });

        card.querySelector('.task-list').appendChild(listItem);
        saveTasks(); // Update local storage after adding a new task

        // Clear input fields after submission
        this.querySelector('.task-input').value = '';
        this.querySelector('.name-input').value = '';
    });
});
