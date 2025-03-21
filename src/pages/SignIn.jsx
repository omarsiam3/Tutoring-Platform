import { useState } from "react";
import Header from "../Components/Header";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const simulateLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "user@example.com" && password === "password") {
          resolve("Login successful!");
        } else {
          reject("Invalid email or password");
        }
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await simulateLogin(email, password);
      alert(res); // Placeholder for future redirect/token handling
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="start vh-100">
        <div className="container-fluid h-custom sign-form">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 tutor-signin">
              <form onSubmit={handleSubmit}>
                <h2 className="fw-bold mb-5 text-center">Sign in</h2>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2 login-button-div">
                  <button
                    type="submit"
                    className="btn btn-lg login-button"
                    style={{ backgroundColor: "#ffb413", color: "#fff" }}
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Login"}
                  </button>
                </div>

                <br />
                <div className="text-center">
                  <p>or sign up with:</p>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <FacebookOutlinedIcon color="primary" />
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <GoogleIcon color="secondary" />
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <XIcon color="action" />
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <GitHubIcon color="action" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5"
          style={{ backgroundColor: "#ffb413" }}
        >
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2024. All rights reserved.
          </div>

          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
