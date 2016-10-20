import axios from 'axios'

// TODO: if you think that some actions are needed or not needed
// notify the slack group so we can discuss
export const DELETE_NOTE = 'DELETE_NOTE'
export const FETCH_NOTE = 'FETCH_NOTE'
export const CREATE_NOTE = 'CREATE_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'

// TODO: update axios requests with backend endpoints
export function deleteNote () {
  const request = axios.get(``)
  return {
    type: DELETE_NOTE,
    payload: request
  }
}

export function fetchNote () {
  const request = axios.get(``)
  return {
    type: FETCH_NOTE,
    payload: request
  }
}

export function createNote () {
  const request = axios.get(``)
  return {
    type: CREATE_NOTE,
    payload: request
  }
}

export function updateNote () {
  const request = axios.get(``)
  return {
    type: UPDATE_NOTE,
    payload: request
  }
}