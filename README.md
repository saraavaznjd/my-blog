# 📰 Blog Project (React + RTK Query + Tailwind CSS)

A modern and responsive blog web app built with **React**, **Redux Toolkit Query**, and **Tailwind CSS**.  
This project includes post management (CRUD), user authentication simulation, dark/light theme switching, and search functionality — all implemented with clean, reusable React components.

---

## 🚀 Features

✅ **Post Management**
- Fetch, add, update, and delete posts using RTK Query  
- Dynamic routing for post details  
- Pagination and search functionality

✅ **User Authentication (Mock)**
- Login and logout functionality with localStorage  
- Redux state management for user session  

✅ **Dark / Light Mode**
- Built with Context API  
- Persistent theme across sessions  

✅ **Modern UI**
- Fully responsive design with **Tailwind CSS**  
- Clean layout with fixed navigation bar  

---

## 🧠 Tech Stack

| Category | Tools & Libraries |
|-----------|-------------------|
| Frontend | React 18, React Router DOM |
| State Management | Redux Toolkit & RTK Query |
| Styling | Tailwind CSS |
| Theme | Custom ThemeContext (Dark/Light Mode) |
| Data Source | [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) |

---

## 📂 Project Structure

📦 BlogByRTK
├── pages
│ ├── Home.jsx
│ ├── PostDetail.jsx
│ ├── loginForm.jsx
├── posts
│ └── posts.jsx
├── users
│ └── users.jsx
├── auth
│ └── authSlice.js
├── theme
│ ├── themeContex.jsx
│ └── themeSwitcher.jsx
├── components
│ └── Navbar.jsx
├── services
│ └── api.js
└── store.js

---

## ⚙️ Installation & Setup

1️⃣ **Clone the repo**

```bash
git clone https://github.com/your-username/blog-project.git
cd blog-project
2️⃣ Install dependencies

npm install


3️⃣ Run the app

npm run dev


4️⃣ Open in browser

http://localhost:5173

🌗 Theme Switching

The app supports light and dark themes using a custom ThemeContext.
Click the ☀️ / 🌙 button in the navbar to toggle between modes.
Your preference is saved automatically!

🧩 API Integration

This project uses RTK Query for efficient API handling.

Example usage:

const { data: posts, isLoading } = useGetPostsQuery()


You can also add, update, and delete posts using RTK mutations.

🧑‍💻 Author

Sara
💌 sara.avaznjd@gmail.com
🌐 GitHub Profile : https://github.com/saraavaznjd

🪄 Screenshots
Home Page	Post Detail	Dark Mode

	
	
🏗️ Future Improvements

Add user authentication with JWT

Comment creation form

Backend integration with Node.js or Firebase

Add animation using Framer Motion

⭐ If you like this project, please give it a star on GitHub!
It helps others discover the project and motivates further development 💙
