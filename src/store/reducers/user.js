import {
    USER_LOGIN,
    USER_REGISTER,
} from '../actions/user.js';
import {
    SET_LOADING,
    SET_MESSAGE,
    SET_SUCCESS,
    SET_ERROR
} from '../actions';

const initialState = {
    user: {},
    token: localStorage.token,
    loading: false,
    error: '',
    message: ''
}

const userReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
        case USER_LOGIN:
            return {
                ...state,
                loading: false,
                token: payload
            }
        case USER_REGISTER:
            return {
                ...state,
                user: payload
            }
        case SET_MESSAGE:
            return {
                ...state,
                loading: false,
                message: payload
            }
        case SET_SUCCESS:
            return {
                ...state,
                user: payload,
                token: payload.token
            }
        case SET_ERROR: 
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}

export default userReducers;