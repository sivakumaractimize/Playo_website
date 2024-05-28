import React from "react";
import { useLocation, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Nav2 = () => {
    const location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white text-dark position-sticky z-1" style={{ top: '0', zIndex: '1000' }}>
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
                            <li className="nav-item">
                           
                            
                            <p className="m-2 p-1 me-5 border border-2 rounded ps-2 fw-bold  bg-success">
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
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav2;
