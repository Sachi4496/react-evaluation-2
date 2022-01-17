import { combineReducers, createStore } from "redux";
import { Reducer as RegisterReducer } from "../Redux/Job/Reducer"
import { authReducer } from "./Auth/Reducer";

const rootReducer = combineReducers({
    authReducer: authReducer,
    RegisterReducer: RegisterReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__()
);