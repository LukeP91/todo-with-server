export const types = {
  ADD: 'ADD_TODO',
  TOGGLE: 'TOGGLE_TODO',
  REMOVE: 'REMOVE_TODO',
  FETCH_TODOS_REQUEST: 'FETCH_TODOS_REQUEST',
  FETCH_TODOS_SUCCESS: 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR: 'FETCH_TODOS_ERROR',
}

export const add = text => {
  return { type: types.ADD, payload: text }
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
