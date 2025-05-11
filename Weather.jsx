import React from "react";
import { Link } from "react-router-dom";

const Weather = () => {
  const weatherData = {
    location: "Your Farm",
    temperature: "32°C",
    condition: "Partly Cloudy",
    humidity: "60%",
    wind: "15 km/h",
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Weather Forecast</h2>
      <div style={styles.card}>
        <p><strong>Location:</strong> {weatherData.location}</p>
        <p><strong>Temperature:</strong> {weatherData.temperature}</p>
        <p><strong>Condition:</strong> {weatherData.condition}</p>
        <p><strong>Humidity:</strong> {weatherData.humidity}</p>
        <p><strong>Wind Speed:</strong> {weatherData.wind}</p>
      </div>
      <Link to="/">
        <button style={styles.button}>Back to Home</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#E0F7FA",
    padding: "30px",
    textAlign: "center",
    minHeight: "100vh",
  },
  heading: {
    color: "#00796B",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#FFC0CB",
    padding: "20px",
    margin: "0 auto",
    maxWidth: "400px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "left",
    lineHeight: "1.6",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#00BCD4",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Weather;
