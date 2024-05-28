import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from "../FirebaseConfig";

const Nav3 = () => {
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [showLogout, setShowLogout] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return unsubscribe;
    }, []);

    const toggleLogout = () => {
      
        setShowLogout(!showLogout);
    };

    const handleLogout = () => {
        alert("Are you sure want to logout")
        auth.signOut().then(() => {
            console.log("User signed out successfully");
           
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white text-dark" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png?q=15" className="img-fluid nav_icon" alt="Logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse me-5" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <p className="m-2 p-1 me-5 border border-2 rounded ps-2 fw-bold d-none d-sm-block">
                            <Icon icon="fluent:location-24-regular" /> Banglore
                        </p>
                        <li className="nav-item ">
                            
                        <p className="m-2 p-1 me-5 border border-2 rounded ps-2 fw-bold text-light  bg-success">
                            Get App
                        </p>
                            
                        </li>
                        <li className="nav-item me-5">
                            <Link className={`nav-link text-dark fw-bold ${location.pathname === '/play' ? 'active-nav' : ''}`} to="/play">
                                Play
                            </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className={`nav-link text-dark fw-bold ${location.pathname === '/book' ? 'active-nav' : ''}`} to="/book">
                                Book
                            </Link>
                        </li>
                        <li className="nav-item me-5" onMouseEnter={toggleLogout} onMouseLeave={toggleLogout}>
                            {user ? (
                                <>
                                    <Link to="/profile" className={`nav-link text-dark fw-bold ${location.pathname === '/profile' ? 'active-nav' : ''}`} >
                                        {user.displayName} <Icon icon="bi:caret-down-fill" />
                                    </Link>
                                    {showLogout && (
                                        <div className="z-1 position-absolute  ms-5" >
                                            <button className="btn btn-danger  text-light" onClick={handleLogout}>Logout</button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link className={`nav-link text-dark fw-bold ${location.pathname === '/profile' ? 'active-nav' : ''}`} to="/profile">
                                    Login/SignUp
                                </Link>
                            )}
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav3;
