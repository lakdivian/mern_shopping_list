import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS} from '../actions/Types';

  const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isLoading: false,
    isAuthernticated: null
  }


export default function(state = initialState, action){
  switch(action.type){
    case USER_LOADING:
      return {
          ...state,
          isLoading: true
      }
    case USER_LOADED:
      return {
        ...state,
        isAuthernticated: true,
        isLoading: false,
        user: action.payload
      }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
        return {
          ...state,
          isAuthernticated: true,
          isLoading: false,
          ...action.payload
        }
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
         return {
           ...state,
           token: null,
           user: null,
           isAuthenticated: false,
           isLoading: false
         }
    default:
       return state;
  }
}
