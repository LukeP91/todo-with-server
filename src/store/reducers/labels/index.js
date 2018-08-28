import { types } from './types'

const initialState = {
  labels: [],
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.FETCH_LABELS_REQUEST: {
      return state
    }
    case types.FETCH_LABELS_SUCCESS: {
      return {
        ...state,
        labels: payload,
      }
    }
    default: {
      return state
    }
  }
}
