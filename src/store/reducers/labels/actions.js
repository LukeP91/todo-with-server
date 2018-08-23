import { types } from './types'

const fetchLabelsRequest = () => {
  return {
    type: types.FETCH_LABELS_REQUEST,
  }
}

const fetchLabelsSuccess = payload => {
  return {
    type: types.FETCH_LABELS_SUCCESS,
    payload,
  }
}

const fetchLabelsError = () => {
  return {
    type: types.FETCH_LABELS_ERROR,
  }
}

const fetchData = (url, params = {}) => {
  return fetch(url, params).then(response => Promise.all([response, response.json()]))
}

export const fetchLabels = (url, params) => {
  return dispatch => {
    dispatch(fetchLabelsRequest())
    return fetchData(url, params).then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchLabelsSuccess(json))
      } else {
        dispatch(fetchLabelsError())
      }
    })
  }
}
