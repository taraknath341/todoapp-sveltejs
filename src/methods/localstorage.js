export function setTodos(todos) {
   const todosString = JSON.stringify(todos);
   localStorage.setItem("todos", todosString);
}

export function getTodos() {
   const todosString = localStorage.getItem("todos");
   const todos = JSON.parse(todosString);
   return todos;
}

export function setTheme(themeIcon) {
   localStorage.setItem("theme-icon", themeIcon);
}

export function getTheme() {
   return localStorage.getItem("theme-icon");
}