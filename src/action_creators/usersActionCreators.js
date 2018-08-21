export const types = {
  FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR: 'FETCH_USERS_ERROR',
}

const fetchUsersRequest = () => {
  return {
    type: types.FETCH_USERS_REQUEST,
  }
}

const fetchUsersSuccess = payload => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload,
  }
}

const fetchUsersError = () => {
  return {
    type: types.FETCH_USERS_ERROR,
  }
}

const fetchData = (url, params = {}) => {
  return fetch(url, params).then(response => Promise.all([response, response.json()]))
}

export const fetchUsers = (url, params) => {
  return dispatch => {
    dispatch(fetchUsersRequest())
    return fetchData(url, params).then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchUsersSuccess(json))
      } else {
        dispatch(fetchUsersError())
      }
    })
  }
}
