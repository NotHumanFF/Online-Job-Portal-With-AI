import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Jobs from './components/Jobs';
import MyProfile from './components/MyProfile';
import Applications from './components/Applications';
import Users from './components/Users';
import AdminJobs from './components/AdminJobs';

function App() {
  const { user, logout } = useAuth();

  console.log('-------------------');
  console.log('User:', user);
  console.log('-------------------');

  return (
    <div className='appContainer'>
      <nav className='navBar bg-base-200'>
        {/* <div className="logo">JobHunter</div> */}
        <div className="flex-none">
                <Link to="/" className="btn btn-ghost text-xl flex items-center gap-1">Workfolio
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>
                </Link>
            </div>
        <ul className='nav-links flex items-center'>
          {/* <li><Link to="/jobs">Jobs</Link></li> */}
          {user ? (
            user.role === 'SEEKER' ? (
              // If user is SEEKER, show Jobs and MyProfile
              <>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/profile">My Profile</Link></li>
              </>
            ) : (
              // If user is ADMIN, show Applications and Users
              <>
                <li><Link to="/applications">Applications</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/adminJobs">Edit Jobs</Link></li>
              </>
            )
          ) : (
            // If no user, show Login and Register
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
          {user && (
            <li>
              <a 
                href="#logout"
                onClick={(e) => {
                  e.preventDefault(); // Prevent page reload
                  logout();
                }}
                className="nav-link btn btn-error"
              >
                Logout
              </a>
            </li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/users" element={<Users />} />
        <Route path="/adminJobs" element={<AdminJobs />} />
      </Routes>
    </div>
  );
}

export default App;
