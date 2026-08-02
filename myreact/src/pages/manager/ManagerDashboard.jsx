import React, { useContext, useEffect } from "react";
import "./ManagerDashboard.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ManagerDashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const customers = [
    { id: 1, name: "Ram", email: "ram@gmail.com", status: "Active" },
    { id: 2, name: "Arjun", email: "arjun@gmail.com", status: "Inactive" },
    { id: 3, name: "Vijay", email: "vijay@gmail.com", status: "Active" }
  ];

  const employees = [
    { id: 1, name: "Suresh", role: "Sales Executive", department: "Sales" },
    { id: 2, name: "Priya", role: "HR Manager", department: "HR" },
    { id: 3, name: "Karthik", role: "Backend Developer", department: "IT" }
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    document.body.classList.add("fade-in");
  }, []);

  return (
    <div className="dashboard">
      
      {/* Top Header */}
      <div className="header">
        <h1>Manager Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Cards */}
      <div className="cards">
        <div className="card">
          <h2>Total Customers</h2>
          <p>{customers.length}</p>
        </div>

        <div className="card">
          <h2>Total Employees</h2>
          <p>{employees.length}</p>
        </div>
      </div>

      {/* Tables */}
      <div className="tables">
        <div className="table-container">
          <h2>Customers Data</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((cust) => (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{cust.email}</td>
                  <td className={cust.status === "Active" ? "active" : "inactive"}>
                    {cust.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-container">
          <h2>Employees Data</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.role}</td>
                  <td>{emp.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default ManagerDashboard;