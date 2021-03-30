import { ADD_USER, UserType, UserActions, LOGOUT } from '../../types';

const initialState: { user: UserType | null, token: string, isLogin: boolean } = {
  user: null,
  token: "",
  isLogin: false
}

export default function userReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case ADD_USER: {
      return { ...state, user: action.user, token: action.token, isLogin: true }
    }
    case LOGOUT: {
      return { ...state, user: null, isLogin: false, token: null }
    }


    default: {
      return state
    }
  }

}