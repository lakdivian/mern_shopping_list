import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from './Types';
import axios from 'axios';
import { returnErrors } from './errorActions';


export const loadUser = () => (dispatch,getState) => {

    dispatch({type: USER_LOADING});

    axios.get('/api/auth/user',getConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}


export const getConfig = getState => {
    var config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    const token = getState().auth.token;

    if(token){
        config.headers['x-auth-token'] = token;
    }

    return config;

}