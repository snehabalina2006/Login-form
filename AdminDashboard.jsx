import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <p>Manage Users, Crops, and Transactions</p>
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default AdminDashboard;
