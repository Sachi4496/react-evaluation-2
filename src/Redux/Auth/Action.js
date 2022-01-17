import { LOGIN_FAILED, LOGIN_SUCCESS } from "./ActionType";

export const LoginSucess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    };
};

export const LoginFailed = (err) => {
    return {
        type: LOGIN_FAILED,
        payload: err,
    };
};
