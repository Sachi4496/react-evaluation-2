// import { useNavigate } from "react-router";

export const Navbar = () => {

    return (
        <div style={{ backgroundColor: "black", color: "white", height: '40px', marginTop: "10px" }}>
            <span onClick={() => (window.location.href = "/")} style={{ marginLeft: "10px" }}>Dashboard</span>
            <span onClick={() => (window.location.href = "/admin")} style={{ marginLeft: "10px" }}>Admin</span>
            <span onClick={() => (window.location.href = "/login")} style={{ marginLeft: "10px" }}>Login</span>
        </div>
    )
}
