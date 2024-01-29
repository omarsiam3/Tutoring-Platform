import Header from "../Components/Header";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
const SignIn = () => {
  return (
    <>
      <Header />
      <section class="start vh-100 ">
        <div class="container-fluid h-custom sign-form">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 tutor-signin">
              <form>
                <h2 class="fw-bold mb-5  text-center">Sign in</h2>
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Email address"
                  />
                </div>

                <div class="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Password"
                  />
                </div>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check mb-0">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label class="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" class="text-body">
                    Forgot password?
                  </a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2 login-button-div">
                  <button
                    type="button"
                    class="btn btn-lg login-button"
                    style={{ backgroundColor: "#ffb413", color: "#fff" }}
                  >
                    Login
                  </button>
                </div>
                <br />
                <div class="text-center">
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <FacebookOutlinedIcon color={"primary"} />
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <GoogleIcon color={"secondary"} />
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <XIcon color={"action"} />
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <GitHubIcon color={"action"} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5"
          style={{ backgroundColor: "#ffb413" }}
        >
          <div class="text-white mb-3 mb-md-0">
            Copyright © 2024. All rights reserved.
          </div>

          <div>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="#!" class="text-white">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
