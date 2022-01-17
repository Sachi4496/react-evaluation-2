import { LOGIN_FAILED, LOGIN_SUCCESS } from "./ActionType";

const LocalAuth = localStorage.getItem("authLogin");

const init = {
    isAuth: LocalAuth || false,
    token: "",
};

export const authReducer = (state = init, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("authLogin", true);
            return {
                ...state,
                isAuth: true,
                token: payload,
            };
        case LOGIN_FAILED:
            return {
                ...state,
                isAuth: false,
                token: "",
            }
        default:
            return state;
    }
};