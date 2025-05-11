import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Login successful!");
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
        <button type="submit" className="btn">Login</button>
      </form>
      <Link to="/register">
        <p>Don't have an account? Register</p>
      </Link>
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default Login;
