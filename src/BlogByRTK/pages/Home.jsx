import React, { useEffect, useState } from "react";
import Posts from "../posts/posts";
import Users from "../users/users";
import { useDispatch } from "react-redux";
import { login, logout } from "../auth/authSlice";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../services/api";

export default function Home() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [searchPosts, setSearchPosts] = useState(null)
  const [searchValue, setSearchValue] = useState('')

  const { data: posts, isLoading } = useGetPostsQuery()

  const submitHandler = (e) => {
    e.preventDefault()
    if (!posts) return
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    setSearchPosts(filtered)
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      dispatch(login(storedUser));
    }
  }, [dispatch]);

  function handleLogout() {
    dispatch(logout());
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center p-6">
      {/* Header */}
      <div className="flex w-full max-w-4xl justify-between items-center mb-6">
      </div>

      {/* User Section */}
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8">
        {user ? (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-lg font-medium">
              Welcome, <span className="text-blue-500 font-semibold">{user?.name || user}</span> 👋
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition-all shadow-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-lg">Please log in:</p>
            <Link
              to="/login"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold transition-all shadow-md"
            >
              Go to Login
            </Link>
          </div>
        )}
      </div>

      {user && (
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-10">

          {/*  Search Bar */}
          <form
            onSubmit={submitHandler}
            className="w-full max-w-md flex items-center gap-2 mb-6"
          >
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search posts..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm bg-white dark:bg-gray-800"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl transition-all shadow-md"
            >
              Search
            </button>
          </form>

          {/*  Posts Section */}
          <div className="w-full max-w-3xl">
            {isLoading ? (
              <p className="text-center text-gray-500 animate-pulse">Loading...</p>
            ) : searchPosts ? (
              searchPosts.length > 0 ? (
                <Posts searchPosts={searchPosts} />
              ) : (
                <p className="text-center text-red-500 font-medium">No posts found.</p>
              )
            ) : (
              <Posts />
            )}
          </div>
        </div>
      )}

      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <Users />
      </div>
    </div>
  );
}
