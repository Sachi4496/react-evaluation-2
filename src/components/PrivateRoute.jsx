import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PrivateRoute = ({ children }) => {
    const { isAuth } = useSelector((state) => ({
        token: state.authReducer.token,
        isAuth: state.authReducer.isAuth,
    }))
    console.log("auth in private", isAuth)
    if (!isAuth) {
        return <Navigate to="/login" />
    }
    return children;
}