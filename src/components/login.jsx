import React, { useState } from 'react';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>

    // <div className="form-container">
    //   <h2>Login</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label>Email:</label>
    //       <input
    //         type="email"
    //         name="email"
    //         value={loginData.email}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <div className="form-group">
    //       <label>Password:</label>
    //       <input
    //         type="password"
    //         name="password"
    //         value={loginData.password}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <div>
    //       <button type="submit">Login</button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Login;
