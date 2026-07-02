import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePageNew from "./pages/HomePageNew";
import EmployeeManagement from "./pages/EmployeeManagement";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageNew />} />
                <Route path="/employees" element={<EmployeeManagement />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;