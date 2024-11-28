import React, { useState } from 'react';
import axiosClient from '../utils/AxiosClient';
import './register.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        cnpassword: '',
        skills: '', 
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("Submitting: ", registerData);

        // Note: Send async POST Call to server
        if (registerData.password !== registerData.cnpassword) {
            alert("Passwords do not match");
            return;
        }
        if (registerData.password.length < 6 || registerData.password.length > 8) {
            alert("Password length must be between 6 and 8 characters.");
            return; // Exit early if the condition is not met
        }

        try {
            const response = await axiosClient.post('http://localhost:8080/auth/signup', registerData);
            console.log("Registration successful: ", response.data);
            alert("User registered successfully, Now you can login with your credentials!");
            navigate('/login');

        } catch (error) {
            console.error("Error occurred while registering: ", error.response?.data || error.message);
            alert(error.response?.data?.message || "An error occurred while registering");
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value,
        });
        // console.log("Updated values: ", registerData);
    };

    return (
        <div>

        {/* <div className="formContainer">
            <h2 className="formHeading">Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Name:</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Mobile No:</label>
                    <input
                        name="mobile"
                        type="text"
                        placeholder="Enter your mobile no"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="**********"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        name="cnpassword"
                        type="password"
                        placeholder="**********"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Skills:</label>
                    <input
                        name="skills"
                        type="text"
                        placeholder="Enter your skills (comma separated)"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div> */}



        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-screen flex-col xl:flex-row gap-12">
        <div className="text-center lg:text">
          <h1 className="text-5xl font-bold text-white">Register now!</h1>
          <p className="py-6">Fill in your details to register.</p>
          <div className='flex justify-center items-center gap-1'>
            <p className='py-0'>Already have an account?</p>
            <Link to="/login" className="link link-primary">Login here!</Link>
          </div>
        </div>


        <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                className="input input-bordered"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        onChange={handleChange}
                        required
                    />
              </div>

              

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                className="input input-bordered"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        required
                    />
              </div>


              {/* Phone */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                className="input input-bordered"
                        name="mobile"
                        type="text"
                        placeholder="Enter your mobile no"
                        onChange={handleChange}
                        required
                    />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                className="input input-bordered"
                        name="password"
                        type="password"
                        placeholder="**********"
                        onChange={handleChange}
                        required
                    />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                className="input input-bordered"
                        name="cnpassword"
                        type="password"
                        placeholder="**********"
                        onChange={handleChange}
                        required
                    />             
             </div>

            
            <div className='form-control'>
            <label className='label'>
            <span className="label-text">Skills</span>

            </label>

                <input
                className="input input-bordered"
                    name="skills"
                    type="text"
                    placeholder="Enter your skills (comma separated)"
                    onChange={handleChange}
                    required
                />

            </div>
            </div>
            {/* Submit Button */}
            <div className="form-control mt-6 flex justify-center items-center">
              <button type="submit" className="btn btn-primary max-w-md">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
}
