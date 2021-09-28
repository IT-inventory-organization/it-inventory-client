export const SET_LOADING = "SET_LOADING";
export const SET_MESSAGE = "SET_MESSAGE";
export const SET_ERROR = "SET_ERROR";
export const SET_SUCCESS = "SET_SUCCESS";

export const setMessage = (message) => {
    return {
        type: SET_MESSAGE,
        payload: message
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const onSuccess = (payload) => {
    return {
        type: SET_SUCCESS,
        payload
    }
}

export const onError = (message) => {
    return {
        type: SET_ERROR,
        payload: message
    }
}