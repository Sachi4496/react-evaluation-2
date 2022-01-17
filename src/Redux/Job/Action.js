// import { useDispatch } from "react-redux";
import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "./ActionType";

export const registerLoading = () => {
    return {
        type: REGISTER_LOADING,
    };
};

export const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS,
    };
};

export const registerFailure = (err) => {
    return {
        type: REGISTER_ERROR,
        payload: err,
    };
}

export const newRegister = (data) => (dispatch) => {
    dispatch(registerLoading());
    fetch("http://localhost:3001/data", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json()).then((res) => {
        res.error ? dispatch(registerFailure(res.message)) : dispatch(registerSuccess());
    }).catch((e) => {
        dispatch(registerFailure(e.message))
    });
};
