import { useState } from "react";

export default function Login() {
  const [loginDetails, loginFunction] = useState({
    name: "",
    password: ""
  });
  const [errors, errorDetails] = useState({});

  const handleChange = (e) => { 
    loginFunction({ ...loginDetails, [e.target.name]: e.target.value });
    console.log({...loginDetails})
  };

  const validate = () => {
    let newErrors = {};
    if (!loginDetails.name.trim()) {
      alert("Fill the Name");
      newErrors.name = "Name is required";
    }
    if (!loginDetails.password) {
      alert("Fill the Password");
      newErrors.password = "Password is required";
    }
    errorDetails(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {
    console.log(e.target.name.value)
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful!");
      console.log("Form Data:", loginDetails);
    }
  };

  return (
    <>
      <div className="login-page bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="mb-3">Login Now</h3>
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <form className="row g-4" onSubmit={onSubmit}>
                        <div className="col-12">
                          <label>
                            Username <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-person-fill"></i>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              value={loginDetails.name}
                              placeholder="Enter Username"
                              onChange={handleChange}
                              name="name"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            Password <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-lock-fill"></i>
                            </div>
                            <input
                              type="password"
                              className="form-control"
                              value={loginDetails.password}
                              name="password"
                              onChange={handleChange}
                              placeholder="Enter Password"
                            />
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineFormCheck"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineFormCheck"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <a href="#" className="float-end text-primary">
                            Forgot Password?
                          </a>
                        </div>

                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 float-end mt-4"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-primary text-white text-center pt-5">
                      <i className="bi bi-bootstrap"></i>
                      <h2 className="fs-1">Welcome Back!!!</h2>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
