import { types } from './types'

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
