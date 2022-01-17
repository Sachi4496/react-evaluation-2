import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "./ActionType";

const init = {
    isLoading: false,
    isError: false,
    isSuccess: false,
};

export const Reducer = (state = init, { type, payload }) => {
    switch (type) {
        case REGISTER_LOADING:
            return {
                ...state, isLoading: true, isError: false, isSucces: false
            };
        case REGISTER_SUCCESS:
            return {
                ...state, isLoading: false, isError: false, isSucces: true
            };
        case REGISTER_ERROR:
            return {
                ...state, isLoading: false, isError: payload, isSucces: false
            };
        default:
            return state;
    }
}