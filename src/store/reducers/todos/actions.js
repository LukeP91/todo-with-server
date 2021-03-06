import { types } from './types'

const fetchTodosRequest = () => {
  return {
    type: types.FETCH_TODOS_REQUEST,
  }
}

const fetchTodosSuccess = payload => {
  return {
    type: types.FETCH_TODOS_SUCCESS,
    payload,
  }
}

const fetchTodosError = () => {
  return {
    type: types.FETCH_TODOS_ERROR,
  }
}

const fetchData = (url, params = {}) => {
  return fetch(url, params).then(response => Promise.all([response, response.json()]))
}

export const fetchTodos = (url, params) => {
  return dispatch => {
    dispatch(fetchTodosRequest())
    return fetchData(url, params).then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchTodosSuccess(json))
      } else {
        dispatch(fetchTodosError())
      }
    })
  }
}

const addTodoRequest = () => {
  return {
    type: types.ADD_TODO_REQUEST,
  }
}

const addTodoSuccess = payload => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload,
  }
}

const addTodoError = () => {
  return {
    type: types.ADD_TODO_ERROR,
  }
}

export const addTodo = (url, params) => {
  return dispatch => {
    dispatch(addTodoRequest())
    return fetchData(url, params).then(([response, json]) => {
      if (response.status === 201) {
        dispatch(addTodoSuccess(json))
      } else {
        dispatch(addTodoError())
      }
    })
  }
}

const removeTodoRequest = () => {
  return {
    type: types.REMOVE_TODO_REQUEST,
  }
}

const removeTodoSuccess = index => {
  return {
    type: types.REMOVE_TODO_SUCCESS,
    payload: index,
  }
}

const removeTodoError = () => {
  return {
    type: types.REMOVE_TODO_ERROR,
  }
}

export const removeTodo = (url, params) => {
  return dispatch => {
    dispatch(removeTodoRequest())
    return fetchData(url, params).then(([response]) => {
      if (response.status === 200) {
        const id = Number(response.url.split('/').slice(-1)[0])
        dispatch(removeTodoSuccess(id))
      } else {
        dispatch(removeTodoError())
      }
    })
  }
}

const toggleTodoRequest = () => {
  return {
    type: types.TOGGLE_TODO_REQUEST,
  }
}

const toggleTodoSuccess = index => {
  return {
    type: types.TOGGLE_TODO_SUCCESS,
    payload: index,
  }
}

const toggleTodoError = () => {
  return {
    type: types.TOGGLE_TODO_ERROR,
  }
}

export const toggleTodo = (url, params) => {
  return dispatch => {
    dispatch(toggleTodoRequest())
    return fetchData(url, params).then(([response]) => {
      if (response.status === 200) {
        const id = Number(response.url.split('/').slice(-1)[0])
        dispatch(toggleTodoSuccess(id))
      } else {
        dispatch(toggleTodoError())
      }
    })
  }
}

const editTodoRequest = () => {
  return {
    type: types.EDIT_TODO_REQUEST,
  }
}

const editTodoSuccess = payload => {
  return {
    type: types.EDIT_TODO_SUCCESS,
    payload,
  }
}

const editTodoError = () => {
  return {
    type: types.EDIT_TODO_ERROR,
  }
}

export const editTodo = (url, params) => {
  return dispatch => {
    dispatch(editTodoRequest())
    return fetchData(url, params).then(([response, json]) => {
      if (response.status === 200) {
        dispatch(editTodoSuccess(json))
      } else {
        dispatch(editTodoError())
      }
    })
  }
}
