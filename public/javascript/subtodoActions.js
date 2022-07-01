// send request to update a subtodo based on the given id
function updateSubtodo(sid, id) {
  const todo = document.querySelector(`.todo-id-${sid}`);
  const parentTodo = document.querySelector(`.todo-id-${id}`);
  todo.classList.toggle('item-done');

  fetch(`/todo/${id}/subtodo/done/${sid}`, { method: 'PUT', body: JSON.stringify({ parentId: id }), headers: { 'content-type': 'application/json' }})
    .then(res => res.json())
    .then(allDone => {
      if (allDone.allDone) {
        parentTodo.classList.add('item-done');
        parentTodo.previousElementSibling.checked = true;
      }
    });
}

// send request to edit a subtodo based on the given id
function editSubtodo(sid, id) {
  const todo = document.querySelector(`.todo-id-${sid}`);
  const button = document.querySelector(`.todo-edit-id-${sid}`);

  todo.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
      todo.setAttribute('readonly', 'readonly');
      button.innerHTML = 'Edit';
      todo.blur();

      fetch(`todo/${id}/subtodo/edit/${sid}`, { method:'PUT', body: JSON.stringify({ task: todo.value }), headers: { 'content-type': 'application/json' }});
    }
  });

  if (button.innerHTML == 'Edit') {
    todo.removeAttribute('readonly');
    todo.focus();
    button.innerHTML = 'Save';
  } else {
    todo.setAttribute('readonly', 'readonly');
    button.innerHTML = 'Edit';

    fetch(`todo/${id}/subtodo/edit/${sid}`, { method:'PUT', body: JSON.stringify({ task: todo.value }), headers: { 'content-type': 'application/json' }});
  }
}

// send request to delete a subtodo based on the given id
function deleteSubtodo(sid, id) {
  fetch(`/todo/${id}/subtodo/delete/${sid}`, { method: 'DELETE'});

  document.querySelector(`input[name='${sid}']`).parentElement.parentElement.remove();
}
