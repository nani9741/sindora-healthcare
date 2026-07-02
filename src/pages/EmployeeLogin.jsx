import { useState } from "react";

function EmployeeLogin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container mt-5">

            <div className="card p-4 mx-auto" style={{maxWidth:"400px"}}>

                <h2>Employee Login</h2>

                <input
                    className="form-control mt-3"
                    placeholder="Username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />

                <input
                    type="password"
                    className="form-control mt-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button
                    className="btn btn-primary mt-3"
                >
                    Login
                </button>

            </div>

        </div>
    );
}

export default EmployeeLogin;