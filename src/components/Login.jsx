import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LoginFailed, LoginSucess } from "../Redux/Auth/Action";
import { Navigate } from "react-router-dom";

export const Login = () => {
    const formData = useRef({ email: "", password: "" });
    const dispatch = useDispatch();
    const { isAuth } = useSelector((state) => ({
        token: state.authReducer.token,
        isAuth: state.authReducer.isAuth,
    }))
    if (isAuth) {
        return <Navigate to="/" />
    }
    return <>
        <div>
            <input type="email" placeholder="Enter Email" onChange={(e) => (formData.current.email = e.target.value)} />
            <input type="password" placeholder="Enter Password" onChange={(e) => (formData.current.password = e.target.value)} />
            <button onClick={() => {
                console.log("formData", formData.current.email)
                if (formData.current.email.length > 0 && formData.current.password.length > 0) {
                    fetch("https://reqres.in/api/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(formData.current),
                    }).then((e) => e.json()).then((e) => dispatch(LoginSucess(e.token))).catch((e) => dispatch(LoginFailed(e)))
                }
            }
            }>Submit</button>
        </div>
    </>
} 