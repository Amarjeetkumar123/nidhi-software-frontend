import "./login.scss"
import loginImage from '../../assets/login-image.jpg'
import logo from '../../assets/logo.png'
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch (err) {
      alert('Failed to log in. Please check your credentials and try again.');
    }
  };
  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="login-right">
        <img src={logo} alt="Website Logo" className="login-logo" />
        <div className="login-title">
          <h2 >NIDHI SOFTWARE</h2>
          <span>Welcome Back! Please Login To Your Account.</span>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <label className="login-label" htmlFor="username">Username / Email</label>
          <input type="text" id="username" className="login-input" placeholder="Enter your username / email" onChange={(e) => setEmail(e.target.value)} />

          <label className="login-label" htmlFor="password">Password</label>
          <div className="login-password">
            <input type={passwordVisible ? "text" : "password"} id="password" className="login-input" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <span className="password-toggle-icon" onClick={(e) => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>
          <div className="forgot-password">
            <a href="#" className="forgot-password-link">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login