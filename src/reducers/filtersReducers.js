import { types } from '../action_creators/filterActionCreators'

const initialState = {
  query: '',
  visiblityFilter: 'All',
}

export const filtersReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.SET_FILTER: {
      return {
        ...state,
        query: payload,
      }
    }
    case types.SET_VISIBILITY_FILTER: {
      return {
        ...state,
        visiblityFilter: payload,
      }
    }
    default: {
      return state
    }
  }
}
