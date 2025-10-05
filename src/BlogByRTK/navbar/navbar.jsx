import { Link, useNavigate } from "react-router-dom";
import ThemeSwitcher from "../theme/themeSwitcher";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";

export default function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Site Name */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          📰 BlogProject
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-all"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition-all"
            >
              Login
            </Link>
          )}

          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
