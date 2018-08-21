export const types = {
  SET_FILTER: 'SET_FILTER',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
}

export const setFilter = value => {
  return {
    type: types.SET_FILTER,
    payload: value,
  }
}

export const setVisiblityFilter = value => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    payload: value,
  }
}
