// send request to update a todo based on the given id
function updateTodo(id) {
  const todo = document.querySelector(`.todo-id-${id}`);
  todo.classList.toggle('item-done');

  fetch(`/todo/done/${id}`, { method: 'PUT' });
}

// send request to edit a todo based on the given id
function editTodo(id) {
  const todo = document.querySelector(`.todo-id-${id}`);
  const button = document.querySelector(`.todo-edit-id-${id}`);

  todo.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
      todo.setAttribute('readonly', 'readonly');
      button.innerHTML = 'Edit';
      todo.blur();

      fetch(`todo/edit/${id}`, { method:'PUT', body: JSON.stringify({ task: todo.value }), headers: { 'content-type': 'application/json' }});
    }
  });

  if (button.innerHTML == 'Edit') {
    todo.removeAttribute('readonly');
    todo.focus();
    button.innerHTML = 'Save';
  } else {
    todo.setAttribute('readonly', 'readonly');
    button.innerHTML = 'Edit';

    fetch(`todo/edit/${id}`, { method:'PUT', body: JSON.stringify({ task: todo.value }), headers: { 'content-type': 'application/json' }});
  }
}

// send request to delete a todo and all it's subtodos based on the given id
function deleteTodo(id) {
  fetch(`/todo/delete/${id}`, { method: 'DELETE'});

  const nodeList = document.querySelectorAll(`.todo-delete-id-${id}`);

  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].parentElement.parentElement.remove();
  }

  if (document.querySelector('#list-item') == null) {
    document.getElementsByClassName('list')[0].remove();
  }
}

// send request to add a subtodo based on the given id
function addSubTodo(id) {
  const subtodoForm = document.querySelector(`.subtodo-form-id-${id}`);
  subtodoForm.style.display = 'block';
  subtodoForm.children[0].focus();
}
