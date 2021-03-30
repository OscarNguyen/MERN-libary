import { ADD_USER, UserType, LOGOUT } from '../../types';


export function addUser(user: UserType, token: string) {
  return {
    type: ADD_USER,
    user,
    token
  };
}



export function logOut() {
  return {
    type: LOGOUT
  }
}