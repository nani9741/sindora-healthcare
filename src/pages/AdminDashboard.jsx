import { useNavigate } from "react-router-dom";
function AdminDashboard() {
    const navigate = useNavigate();
    return (

        <div className="container mt-5">

            <h1>Admin Dashboard</h1>

            <div className="row mt-4">

                <div
                    className="col-md-3"
                    onClick={() => navigate("/employees")}
                    style={{ cursor: "pointer" }}
                >
                    <div className="card p-3 text-center">
                        <h4>Employees</h4>
                        <p>Manage Employees</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card p-3 text-center">
                        <h4>Offer Letters</h4>
                        <p>Generate Offers</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card p-3 text-center">
                        <h4>Payslips</h4>
                        <p>Generate Payslips</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card p-3 text-center">
                        <h4>Attendance</h4>
                        <p>Track Attendance</p>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default AdminDashboard;