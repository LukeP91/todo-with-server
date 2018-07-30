export const types = {
  TOGGLE: 'TOGGLE_TODO',
  REMOVE: 'REMOVE_TODO',
  FETCH_TODOS_REQUEST: 'FETCH_TODOS_REQUEST',
  FETCH_TODOS_SUCCESS: 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR: 'FETCH_TODOS_ERROR',
  ADD_TODO_REQUEST: 'ADD_TODO_REQUEST',
  ADD_TODO_SUCCESS: 'ADD_TODO_SUCCESS',
  ADD_TODO_ERROR: 'ADD_TODO_ERROR',
}

export const toggle = index => {
  return { type: types.TOGGLE, payload: index }
}

export const remove = index => {
  return { type: types.REMOVE, payload: index }
}

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
