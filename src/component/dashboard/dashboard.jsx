// Dashboard.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import authService from "../../services/service";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";
import { Trash, FilePenLine } from "lucide-react";

export default function Dashboard() {
  const [usersData, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: ""
  });

  // ✅ Fetch users
  const fetchData = async () => {
    try {
      const data = await authService.getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Edit handler
  const handleEdit = (user) => {
    setEditingUser(user.id);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email
    });
  };

  // ✅ Update handler
  const handleUpdate = async () => {
    try {
      const result = await authService.updateUser(editingUser, formData);
      // if (result.success) {
        setEditingUser(null);
        fetchData();
      // } else {
      //   alert("Failed to update: " + result.message);
      // }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // ✅ Delete handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const result = await authService.deleteUser(id);
      if (result.success) {
        fetchData();
      } else {
        alert("Failed to delete: " + result.message);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="d-flex sideBar vh-100">
        <Sidebar />

        <main className="flex-grow-1 overflow-auto p-2 mb-5">
          <div className="card regsiterDataUser mt-2">
            <div className="card-header">Register User</div>
            <div className="card-body p-0 border-0 ">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.map((item, index) =>
                    editingUser === item.id ? (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                firstName: e.target.value
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                lastName: e.target.value
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={formData.username}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                username: e.target.value
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value
                              })
                            }
                          />
                        </td>
                        <td>
                          <button
                            className="deleteUser"
                            onClick={handleUpdate}
                          >
                            Save
                          </button>
                          <button
                            className="deleteUser"
                            onClick={() => setEditingUser(null)}
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ) : (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>
                          <button
                            className="deleteUser"
                            onClick={() => handleEdit(item)}
                          >
                            <FilePenLine size={14} />
                          </button>
                          <button
                            className="deleteUser"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Trash size={14} />
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
