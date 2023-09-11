const input = document.getElementById('input-box');
const list = document.getElementById('list-container');

function addTask() {
    if (input.value === '') {
        alert('You must write something!');
    } else {
        const taskText = input.value;

        let li = document.createElement('li');
        li.textContent = taskText;

        li.addEventListener('click', function() {
            li.classList.toggle('checked');
        });

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";

        span.addEventListener('click', function(event) {
            event.stopPropagation();
            li.remove();
        });

        li.appendChild(span);
        list.appendChild(li);
        input.value = '';
    }
}

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});