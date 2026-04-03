import { useState } from "react";
import "../../styles/register.css";
import { useNavigate  } from "react-router-dom";
export default function Register() {
  const navigate  = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let onlyErrors = {};
    if (!formData.firstName.trim()) onlyErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) onlyErrors.lastName = "Last name is required";
    if (!formData.username.trim()) onlyErrors.username = "Username is required";
    if (!formData.email) onlyErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) onlyErrors.email = "Invalid email";
    if (!formData.password) onlyErrors.password = "Password is required";
    else if (formData.password.length < 6) onlyErrors.password = "Min 6 characters";
    if (formData.confirmPassword !== formData.password)
      onlyErrors.confirmPassword = "Passwords do not match";
    if(!formData.terms)
    setErrors(onlyErrors);
    return Object.keys(onlyErrors).length === 0;
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     
    if (validate()) {
      alert("Registration Successful!");
      console.log("Form Data:", formData);
      navigate("/login");
    }
  };
  // const clickMe=(e)=>{
  //       if(e == 'login'){alert('correct')}
          
  //       else{alert('Wrong')}
          
  // }
  return (
  <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg overflow-hidden w-75" style={{ borderRadius: '15px' }}>
        
        <div className="col-lg-5 d-none d-lg-flex bg-primary-color align-items-center justify-content-center p-5 text-white">
          <div className="text-center">
            <h1 className="fw-bold">COMPANY LOGO NAME</h1>
            <p>Join our amazing community today.</p>
          </div>
        </div>
        {/* <button onClick={() => clickMe('login')}>Click</button> */}
        <div className="col-lg-7 col-md-12 bg-white p-3  registerRight">
          <h2 className="fw-bold mb-1">REGISTER</h2>
          <p className="text-muted mb-4 small">IT’S COMPLETELY FREE</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" name="firstName" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} 
                  placeholder="First name" value={formData.firstName} onChange={handleChange} />
                <div className="invalid-feedbacks">{errors.firstName}</div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" name="lastName" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  placeholder="Last name" value={formData.lastName} onChange={handleChange} />
                <div className="invalid-feedbacks">{errors.lastName}</div>
              </div>
              <div className="col-md-6">
              <label className="form-label">Username</label>
              <input type="text" name="username" className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                placeholder="Username" value={formData.username} onChange={handleChange} />
              <div className="invalid-feedbacks">{errors.username}</div>
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Email address" value={formData.email} onChange={handleChange} />
              <div className="invalid-feedbacks">{errors.email}</div>
            </div> 
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input type="password" name="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="••••••" value={formData.password} onChange={handleChange} />
                <div className="invalid-feedbacks">{errors.password}</div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Confirm Password</label>
                <input type="password" name="confirmPassword" className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  placeholder="••••••" value={formData.confirmPassword} onChange={handleChange} />
                <div className="invalid-feedbacks">{errors.confirmPassword}</div>
              </div>
            </div>

            <div className="form-check mb-4 text-start d-flex align-items-center">
              <input type="checkbox" onChange={handleChange}  className= {`form-check-input me-2 ${errors.confirmPassword ? 'is-invalid' : ''}`}  id="terms" />
              <label className="form-check-label"  htmlFor="terms">I agree to the Terms & Conditions</label>
                 <div className="invalid-feedbacks">{errors.terms}</div>
            </div>

            <button type="submit" className="btn btn-create w-100 py-2 fs-12 fw-bold">CREATE ACCOUNT</button>
          </form>

          <p className="mt-4 text-center text-muted">
            I’m already a member. <a href="/login" className="text-primary text-decoration-none">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
