const todoContainer = document.querySelector(".todoItems");
const submit = document.querySelector(".submit");
const todoItemStored = JSON.parse(localStorage.getItem("todoItem")) ||[];
const removeTodo = (Element, Index) => {
    
}
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');

    addButton.addEventListener("click", () => {
    const newListItem = document.createElement("list");
    newListItem.innerHTML = todoInput.Value;
    todoList.appendChild(newListItem);

    todoInput.Value = ;
})
