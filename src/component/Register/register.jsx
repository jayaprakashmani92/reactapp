import { useState, useEffect } from "react";
import "../../styles/register.css";
import { useNavigate } from "react-router-dom";
import authService from "../../services/service";
// import {authService} from '../../services/service' 
  import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });
 const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await authService.getAllUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const validate = () => {
    let onlyErrors = {};

    if (!formData.firstName.trim())
      onlyErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
      onlyErrors.lastName = "Last name is required";

    if (!formData.username.trim())
      onlyErrors.username = "Username is required";

    if (!formData.email)
      onlyErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      onlyErrors.email = "Invalid email";

    if (!formData.password)
      onlyErrors.password = "Password is required";
    else if (formData.password.length < 6)
      onlyErrors.password = "Min 6 characters";

    if (formData.confirmPassword !== formData.password)
      onlyErrors.confirmPassword = "Passwords do not match";

    if (!formData.terms)
      onlyErrors.terms = "You must accept terms";

    setErrors(onlyErrors);
    return Object.keys(onlyErrors).length === 0;
  };

  const signup = async () => {
    const result = await authService.registerUser(formData);

    if (result.success) {
      toast("Register Successfully ");
      setTimeout(()=>{
          
            navigate("/dashboard");
      }, 3000)
    
    } else {
      setErrors({ firebase: result.message });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      signup();
    }
  };

  return (
    <>
    
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg overflow-hidden w-75" style={{ borderRadius: '15px' }}>

        <div className="col-lg-5 d-none d-lg-flex bg-primary-color align-items-center justify-content-center p-5 text-white">
          <div className="text-center">
                <h2 className="fw-bold mb-1">REGISTER</h2>
          <p className="text-muted mb-4 small">IT’S COMPLETELY FREE</p>
          <img src="https://ismailvtl-images-project.vercel.app/startup-launch.png" className="w-100" alt="Login Left Image" />
          </div>
        </div>

        <div className="col-lg-7 col-md-12 bg-white p-3 registerRight">
      

          {errors.firebase && (
            <div className="alert alert-danger">{errors.firebase}</div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="row mb-3">

              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" name="firstName"
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <div className="invalid-feedbacks">{errors.firstName}</div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" name="lastName"
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <div className="invalid-feedbacks">{errors.lastName}</div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Username</label>
                <input type="text" name="username"
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <div className="invalid-feedbacks">{errors.username}</div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="invalid-feedbacks">{errors.email}</div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input type="password" name="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="invalid-feedbacks">{errors.password}</div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Confirm Password</label>
                <input type="password" name="confirmPassword"
                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <div className="invalid-feedbacks">{errors.confirmPassword}</div>
              </div>

            </div>

            <div className="form-check mb-3 d-flex">
              <input
                type="checkbox"
                name="terms"
                onChange={handleChange}
                className={`me-2 form-check-input ${errors.terms ? 'is-invalid' : ''}`}
              />
              <label className="form-check-label">
                I agree to Terms & Conditions
              </label>
              <div className="invalid-feedbacks">{errors.terms}</div>
            </div>

            <button type="submit" className="btn btn-create w-100">
              CREATE ACCOUNT
            </button>
          </form>

          <p className="mt-3 text-center f-12">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
       <ToastContainer theme="colored"/>
    </>

  );
}