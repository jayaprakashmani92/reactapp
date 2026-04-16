import { Routes, Route } from "react-router-dom";
import Register from "./component/Register/register";
import Login from "./component/Login/login";
import Dashboard from "./component/dashboard/dashboard";
import { useState, useEffect } from "react";  
import authService from "./services/service";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await authService.getAllUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Routes>
        {/* Pass props via element */}
        <Route
          path="/"
          element={<Register setUsers={setUsers} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard users={users} formData={FormData} />}
        />
      </Routes>
    </>
  );
}

export default App;
