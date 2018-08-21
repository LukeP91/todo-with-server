export const filteredTodos = (todos, value) => {
  return todos.filter(todo => {
    return todo.title.toLowerCase().includes(value.toLowerCase())
  })
}

export const filterTodosByStatus = (todos, value) => {
  if (value === 'All') {
    return todos
  }
  if (value === 'Open') {
    return todos.filter(todo => {
      return todo.completed === false
    })
  }
  return todos.filter(todo => {
    return todo.completed === true
  })
}
