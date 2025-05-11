import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold">Farmer's Market</h1>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/login" className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link to="/register" className="ml-4 text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

