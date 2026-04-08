// Dashboard.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "../Register/register";
import authService from "../../services/service";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";
import {Trash   } from 'lucide-react';  
export default function Dashboard() {
  const [usersData, setUsers] = useState([]);
  const handleDelete = async (id) => {
    
    // if (result.success) {
      if (window.confirm("Are you sure you want to delete?")) {
        const result = await authService.deleteUser(id);
        // setUsers(users.filter((user) => user.id !== id));
        // const updatedUsers = await authService.getAllUsers();
        // setUsers(updatedUsers);
        fetchData();
      }
      else {
      alert("Failed to delete: ");
    }
    // } 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await authService.getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex sideBar vh-100">
        <Sidebar />

        <main className="flex-grow-1 overflow-auto p-2 mb-5">
          <div className="card regsiterDataUser mt-2">
            <div className="card-header">Register User</div>
            <div className="card-body p-0 border-0 ">
              <table className="table   mb-0">
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
                  {usersData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>
                        <button
                          className="deleteUser"
                          onClick={() => handleDelete(item.id)}
                        >
                          
                          <Trash size={14}/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}
