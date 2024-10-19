import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from 'react-router-dom';

function Home(params) {
    return (
        <div>
            <Navbar/>
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
            <Footer/>
        </div>
    );
}

export default Home;