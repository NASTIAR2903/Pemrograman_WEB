// Seleksi elemen HTML
const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Fungsi untuk menambah task
addBtn.addEventListener('click', addTodo);

function addTodo() {
    const task = todoInput.value.trim();

    if (task !== '') {
        const li = document.createElement('li');
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = task;
        inputField.disabled = true;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit');
        editBtn.addEventListener('click', () => toggleEdit(inputField, editBtn));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => li.remove());

        li.appendChild(inputField);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        todoInput.value = ''; // Bersihkan input setelah menambah
    } else {
        alert('Isi sek lur!');
    }
}

// Fungsi untuk mengaktifkan dan menonaktifkan edit mode
function toggleEdit(inputField, editBtn) {
    if (inputField.disabled) {
        inputField.disabled = false;
        editBtn.textContent = 'Save';
        inputField.focus(); // Fokus ke input saat edit diaktifkan
    } else {
        inputField.disabled = true;
        editBtn.textContent = 'Edit';
    }
}
// Ul itu unordered list
//li itu list item
// UL itu Bapaknya LI