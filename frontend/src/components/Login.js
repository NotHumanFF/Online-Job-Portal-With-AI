import React, {useState} from 'react';
import axiosClient  from '../utils/AxiosClient'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login(){
    const navigate = useNavigate();
    const { user, login } = useAuth();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        // if (loginData.password.length < 6 || loginData.password.length > 8) {
        //     alert("Password length must be between 6 and 8 characters.");
        //     return; // Exit early if the condition is not met
        // }

        try {
            console.log("Submitting: ", loginData);

            const loggedInUser = await login(loginData);

            if(loggedInUser.role === 'SEEKER'){
                navigate('/jobs');
            }
            else{
                navigate('/applications');
            }
        } catch (error) {
            console.error('Login error:', error);
        }


       
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
        // console.log("Updated values: ",loginData);
    }

    return (
        <div>
     



<div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">
  <div className="flex flex-col justify-left text-center lg:text-left max-w-3xl">
    <h1 className="text-5xl font-bold text-white">Login now!</h1>
    <p className="py-6 ">
      Unlock Your Future with Workfolio! Log in now for personalized job listings, career tools and networking that brings your dream job closer than ever.
    </p>
    <div className='flex justify-center lg:justify-start items-center gap-1'>
      <p className='py-0'>Don't have an account?</p>
      <Link to="/register" className="link link-primary">Register here!</Link>
    </div>
  </div>

  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <form onSubmit={handleLogin} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Email</span>
        </label>
        <input className="input input-bordered" name='email' type='email' placeholder='Enter your email' onChange={handleChange} required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Password</span>
        </label>
        <input className="input input-bordered"name='password' type='password' placeholder='**********' onChange={handleChange} required />
        {/* <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label> */}
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary text-lg">Login</button>
      </div>
    </form>
  </div>
</div>
</div>

</div>
    )
}