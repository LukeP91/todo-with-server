export const types = {
  ADD: 'ADD_TODO',
  TOGGLE: 'TOGGLE_TODO',
  REMOVE: 'REMOVE_TODO',
}

export const todosActionCreators = {
  add: text => {
    return { type: types.ADD, payload: text }
  },
}

export const toggle = index => {
  return { type: types.TOGGLE, payload: index }
}

export const remove = index => {
  return { type: types.REMOVE, payload: index }
}
