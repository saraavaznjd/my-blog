import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(login(user));
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-sm mx-auto mt-20 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
    >
      <input
        type="text"
        placeholder="Enter Username..."
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-all"
      >
        Submit
      </button>
    </form>
  );
}
