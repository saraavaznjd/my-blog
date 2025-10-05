import { Routes, Route } from 'react-router-dom'
import Home from './BlogByRTK/pages/Home'
import PostDetail from './BlogByRTK/pages/PostDetail'
import LoginForm from './BlogByRTK/pages/loginForm'
import Navbar from './BlogByRTK/navbar/navbar'

export default function App() {
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center pt-20">
      {/*  Navbar */}
      <Navbar />

      {/*  Routes Section */}
      <div className="w-full max-w-4xl mt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/postDetail/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </div>
  )
}
