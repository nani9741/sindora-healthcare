import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function AdminLogin() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleLogin = () => {

        axios.post("http://localhost:8080/admin/login", loginData)
            .then((res) => {

                if (res.data === "LOGIN_SUCCESS") {

                    navigate("/admin-dashboard");

                } else {

                    alert("Invalid Credentials");

                }

            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container mt-5">

            <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>

                <h2>Admin Login</h2>

                <input
                    className="form-control mt-3"
                    placeholder="Username"
                    value={loginData.username}
                    onChange={(e) =>
                        setLoginData({
                            ...loginData,
                            username: e.target.value
                        })
                    }
                />

                <input
                    type="password"
                    className="form-control mt-3"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) =>
                        setLoginData({
                            ...loginData,
                            password: e.target.value
                        })
                    }
                />

                <button
                    className="btn btn-primary mt-3"
                    onClick={handleLogin}
                >
                    Login
                </button>

            </div>

        </div>
    );
}

export default AdminLogin;