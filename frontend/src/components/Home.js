import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen mt-[-50px] z-0">
                <div className="hero-content text-center">
                    <div>
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-5xl font-bold text-white">Build Your Future</h1>
                            <h1 className="text-5xl font-bold text-white">One Opportunity at a Time</h1>
                            <p className="py-6">
                                At Workfolio, we bring you closer to your dream job with a user-friendly platform featuring tailored job listings, career resources, and networking opportunities. Start your search today and step into a brighter future!
                            </p>
                        </div>
                    
                        <Link to="/jobs">
                            <button className="btn btn-primary max-w-xs">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="assets/remote.svg" className="max-w-sm rounded-lg  lg:mr-8" />

                    <div className="max-w-lg"> 
                        <h1 className="text-5xl font-bold"><span className="text-primary">Discover</span> Jobs That Match Your Ambition</h1>
                        <p className="py-6">
                            Find thousands of opportunities that match your skills and career aspirations. 
                            Whether you're looking for remote work, internships, or full-time roles, our platform 
                            connects you with employers ready to hire. Start your journey today and take the next step 
                            towards building your future!
                        </p>
                    </div>
                </div>
            </div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="max-w-lg"> 
                        <h1 className="text-5xl font-bold">Collaborate to Elevate Your <span className="text-primary">Career</span></h1>
                        <p className="py-6">
                            Kickstart your professional journey by working alongside talented individuals from various fields. 
                            Our platform not only helps you find your ideal job but also fosters collaboration and networking 
                            with professionals who share your passion. Build meaningful connections, collaborate on exciting projects, 
                            and take your career to the next level, together!
                        </p>
                    </div>

                    <img src="./assets/work.svg" className="max-w-sm rounded-lg  lg:mr-8" />
                </div>
            </div>


            {/* footer */}

            <footer className="footer bg-base-300 text-base-content p-10">
            <aside>
                
            <div className="flex-1">
                <Link to="/" className="flex items-center text-3xl">
                    Workfolio
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-9 ml-2" >
                        <path strokeLinecap="round"strokeLinejoin="round"d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
                    </svg>
                </Link>
            </div>

            <p>Navigate Your Career Path!</p>
            </aside>
            <nav>
                <h6 className="footer-title text-primary">Services</h6>
                <Link to="/profile" className="link link-hover">Account</Link>
                <Link to="/jobs" className="link link-hover">Jobs</Link>
                <a className="link link-hover">Marketing</a>
            </nav>
            <nav>
                <h6 className="footer-title text-primary">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Terms of use</a>
            </nav>
            <nav>
                <h6 className="footer-title text-primary">Social</h6>
                <div className="grid grid-flow-col gap-4">
                <a>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                </a>
                <a>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                </a>
                <a>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                </a>
                </div>
            </nav>
        </footer>
        </div>
    );
}
