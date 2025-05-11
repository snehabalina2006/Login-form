import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Farmer's Market</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/weather">Weather</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-box">
            <h2>Farmer's Market</h2>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          </div>
          <h1>Welcome to Farmer's Market</h1>
          <p>
            Connect with farmers, buy fresh produce, and access agricultural
            resources all in one place.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>Crop Marketplace</h3>
          <p>Buy and sell crops directly from farmers to consumers.</p>
        </div>

        <div className="feature-card">
          <h3>Weather Updates</h3>
          <p>Get real-time weather forecasts for better farming decisions.</p>
        </div>

        <div className="feature-card">
          <h3>Farming Tools</h3>
          <p>Shop for agricultural equipment and supplies.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
