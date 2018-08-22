import { types } from '../action_creators/usersActionCreators'

const initialState = {
  users: [],
}

export const usersReducer = (state = initialState, action) => {
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
