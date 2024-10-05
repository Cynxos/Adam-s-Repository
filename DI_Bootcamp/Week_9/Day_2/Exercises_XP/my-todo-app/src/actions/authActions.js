import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from './actionTypes';

export const loginSuccess = (user, token) => ({
  type: LOGIN_SUCCESS,
  payload: { user, token }
});

export const logout = () => ({
  type: LOGOUT
});

export const registerSuccess = (user, token) => ({
  type: REGISTER_SUCCESS,
  payload: { user, token }
});
