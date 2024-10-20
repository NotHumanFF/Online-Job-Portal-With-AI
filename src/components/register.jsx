import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    password: '',
    dob: '',
    gender: '',
    nationality: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-screen flex-col xl:flex-row gap-12">
        <div className="text-center lg:text">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Fill in your details to register.</p>
          <div className='flex justify-center items-center gap-1'>
            <p className='py-0'>Already have an account?</p>
            <Link to="/login" className="link link-primary">Login here!</Link>
          </div>
        </div>


        <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              {/* Address */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input type="text" placeholder="Address" className="input input-bordered" name="address" value={formData.address} onChange={handleChange} required />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" className="input input-bordered" name="email" value={formData.email} onChange={handleChange} required />
              </div>


              {/* Phone */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="text" placeholder="Phone" className="input input-bordered" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" className="input input-bordered" name="password" value={formData.password} onChange={handleChange} required />
              </div>

              {/* DOB */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <input type="date" placeholder="DOB" className="input input-bordered" name="dob" value={formData.dob} onChange={handleChange} required />
              </div>

              {/* Gender */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <div className="flex space-x-4">
                  <label className="label cursor-pointer">
                    <input type="radio" name="gender" value="male" className="radio radio-primary" checked={formData.gender === "male"} onChange={handleChange} />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="label cursor-pointer">
                    <input type="radio" name="gender" value="female" className="radio radio-primary" checked={formData.gender === "female"} onChange={handleChange} />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>

              {/* Nationality */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nationality</span>
                </label>
                <select className="select select-bordered" name="nationality" value={formData.nationality} onChange={handleChange} required>
                  <option disabled value="">Select Nationality</option>
                  <option value="Indian">Indian</option>
                  <option value="American">American</option>
                  <option value="British">British</option>
                  <option value="Canadian">Canadian</option>
                  <option value="Australian">Australian</option>
                </select>             
              </div>

            </div>
            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>










    // <div className="form-container">
    //   <h2>Sign Up</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label>Name:</label>
    //       <input
    //         type="text"
    //         name="name"
    //         value={formData.name}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <div className="form-group">
    //       <label>Address:</label>
    //       <input
    //         type="text"
    //         name="address"
    //         value={formData.address}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <div className="form-group">
    //       <label>Email:</label>
    //       <input
    //         type="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <div className="form-group">
    //       <label>Phone:</label>
    //       <input
    //         type="text"
    //         name="phone"
    //         value={formData.phone}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <div className="form-group">
    //       <label>Password:</label>
    //       <input
    //         type="password"
    //         name="password"
    //         value={formData.password}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <div className="form-group">
    //       <label>Date of Birth:</label>
    //       <input
    //         type="date"
    //         name="dob"
    //         value={formData.dob}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <div className="form-group radio-group">
    //       <label>Gender:</label>
    //       <label>
    //         <input
    //           type="radio"
    //           name="gender"
    //           value="Male"
    //           onChange={handleChange}
    //           checked={formData.gender === 'Male'}
    //           required
    //         /> Male
    //       </label>
    //       <label>
    //         <input
    //           type="radio"
    //           name="gender"
    //           value="Female"
    //           onChange={handleChange}
    //           checked={formData.gender === 'Female'}
    //           required
    //         /> Female
    //       </label>
    //     </div>

    //     <div className="form-group">
    //       <label>Nationality:</label>
    //       <select
    //         name="nationality"
    //         value={formData.nationality}
    //         onChange={handleChange}
    //         required
    //       >
    //         <option value="">Select nationality</option>
    //         <option value="Indian">Indian</option>
    //         <option value="American">American</option>
    //         <option value="British">British</option>
    //         <option value="Canadian">Canadian</option>
    //       </select>
    //     </div>

    //     <div>
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default SignUp;
