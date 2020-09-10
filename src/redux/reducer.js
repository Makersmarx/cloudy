import axios from 'axios';

const initialState = {
  username: '',
  isLoggedIn: false,
};

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';

export function loginUser(username) {
  return {
    type: LOGIN_USER,
    payload: username,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: initialState,
  };
}

export function getUser() {
  const username = axios
    .get('/auth/user')
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return {
    type: GET_USER,
    payload: username,
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, username: action.payload, isLoggedIn: true };
    case LOGOUT_USER:
      return { ...state, ...action.payload };
    case GET_USER + '_PENDING':
      return state;
    case GET_USER + '_FULFILLED':
      return { ...state, username: action.payload, isLoggedIn: true };
    case GET_USER + '_REJECTED':
      return initialState;
    default:
      return initialState;
  }
}
