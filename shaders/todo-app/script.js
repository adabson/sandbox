document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todoInput');
  const addButton = document.getElementById('addButton');
  const todoList = document.getElementById('todoList');

  addButton.addEventListener('click', addTodo);
  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  });

  function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">Yeet</button>
      `;

      li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
      });

      todoList.appendChild(li);
      todoInput.value = '';
    }
  }
});