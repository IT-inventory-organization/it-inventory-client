import server from '../../api';
import { setLoading,  onSuccess, onError} from '../actions';

export const USER_LOGIN = "USER_LOGIN";
export const USER_REGISTER = "USER_REGISTER";

export const register = (payload) => {
    return async (dispatch) => {
        dispatch(setLoading());
        try {
            const user = await server.post('/register', payload);
            return onSuccess(user);
        } catch (err) {
            return onError(err);
        }

    }
}

export const login = (payload) => {
    return (dispatch) => {
        dispatch(setLoading());
    }
}

