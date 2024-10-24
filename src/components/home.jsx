import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from 'react-router-dom';

function Home(params) {
    return (
        <div>
            <Navbar/>

            {/* Hero section */}
            <div className="hero bg-base-200 min-h-screen mt-[-50px] z-0">
                <div className="hero-content text-center">
                    <div>
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-5xl font-bold">Build Your Future</h1>
                            <h1 className="text-5xl font-bold">One Opportunity at a Time</h1>
                            <p className="py-6">
                                At Workfolio, we bring you closer to your dream job with a user-friendly platform featuring tailored job listings, career resources, and networking opportunities. Start your search today and step into a brighter future!
                            </p>
                        </div>
                        <Link to="/login">
                            <button className="btn btn-primary max-w-xs">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>


            {/* Content */}
            {/* second section */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/remote.svg" className="max-w-sm rounded-lg  lg:mr-8" />

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


            {/* third section */}
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

                    <img src="/work.svg" className="max-w-sm rounded-lg  lg:mr-8" />
                </div>
            </div>


            <Footer/>
        </div>
    );
}

export default Home;