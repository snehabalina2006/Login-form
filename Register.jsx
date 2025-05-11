import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "", role: "farmer" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" required value={formData.confirmPassword} onChange={handleChange} />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="farmer">Farmer</option>
          <option value="buyer">Buyer</option>
        </select>
        <button type="submit" className="btn">Register</button>
      </form>
      <Link to="/login">
        <p>Already have an account? Login</p>
      </Link>
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default Register;
