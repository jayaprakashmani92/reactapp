import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
export default function Login() {
    const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "", // use email instead of name
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!loginDetails.email.trim()) {
      alert("Fill the Email");
      newErrors.email = "Email is required";
    }
    if (!loginDetails.password) {
      alert("Fill the Password");
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          loginDetails.email,
          loginDetails.password,
        );
          navigate("/dashboard");
        console.log("User:", userCredential.user);

        // redirect to dashboard here (React Router or window.location)
      } catch (error) {
        console.error("Error logging in:", error);
        alert("Login failed: " + error.message);
      }
    }
  };

  return (
    

    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row shadow-lg overflow-hidden w-75"
        style={{ borderRadius: "15px" }}
      >
        <div className="col-lg-6 d-none d-lg-flex bg-primary-color align-items-center justify-content-center p-5 text-white">
          <div className="text-center">
            <h2 className="fw-bold mb-1">LOGIN</h2>
            <p className="text-muted mb-4 small">Welcome Back!</p>
            <img
              src="https://ismailvtl-images-project.vercel.app/startup-launch.png"
              className="w-75"
              alt="Login Left Image"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12 bg-white p-3 registerRight">
          <div className="centerForm">
            <form className="row g-4" onSubmit={onSubmit}>
              <div className="col-12 mt-1">
                <label for="email">
                  Email <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  
                  <input
                    type="email"
                    className="form-control"
                    value={loginDetails.email}
                    placeholder="Enter Email"
                    onChange={handleChange}
                    name="email"
                    id="email"
                  />
                </div>
              </div>

              <div className="col-12 mt-1">
                <label for="password">
                  Password <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                 
                  <input
                    type="password"
                    className="form-control"
                    value={loginDetails.password}
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter Password"
                    id="password"
                  />
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-create w-100">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
