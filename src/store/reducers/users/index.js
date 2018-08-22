import { types } from './types'

const initialState = {
  users: [],
}

export const users = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.FETCH_USERS_REQUEST: {
      return state
    }
    case types.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        users: payload,
      }
    }
    default: {
      return state
    }
  }
}
