import "./login.css";

function Login() {
  return (
    <>
    <div className="registerHeading">
        <h2>Social Media Application</h2>
    </div>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form className="loginRegisterFrom" action="#">
            <h1 className="loginRegisterH1">Register</h1>
            <input
              className="loginRegisterInput"
              placeholder="Username"
              name="r_user"
              id="r_user"
            />
            <input
              className="loginRegisterInput"
              placeholder="email"
              name="r_email"
              id="r_email"
            />
            <input
              className="loginRegisterInput"
              placeholder="Password"
              name="r_pass"
              id="r_pass"
            />
             <input
              className="loginRegisterInput"
              placeholder="Conform Password"
            />
            <p>Forgot your password?</p>
            <button className="loginRegisterButton">Register</button>
            <small id="regisersuccess"></small>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form className="loginRegisterFrom" action="#">
            <h1 className="loginRegisterH1">Login</h1>
            <input
              className="loginRegisterInput"
              placeholder="Username"
              name="l_user"
              id="l_user"
            />
            <input
              className="loginRegisterInput"
              placeholder="Password"
            />
            <p id="forgot">Forgot your password?</p>
            <button className="loginRegisterButton">Login</button>
            <small ></small>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="bg-bubbles">
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
            </div>

            <div class="overlay-panel overlay-left">
              <h1 className="loginRegisterH1">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="loginRegisterButton"
                class="ghost"
                onClick={() => {
                  container.classList.remove("right-panel-active");
                }}
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 className="loginRegisterH1">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="loginRegisterButton"
                class="ghost"
                onClick={() => {
                  container.classList.add("right-panel-active");
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
