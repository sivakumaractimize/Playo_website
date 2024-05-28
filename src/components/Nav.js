import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navIcon = document.querySelector('.nav_icon');
            if (navIcon) {
                if (window.scrollY > 300) {
                    navIcon.style.display = 'block';
                } else {
                    navIcon.style.display = 'none';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg  position-sticky z-1" style={{ top: '0', zIndex: '1000' }} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-ball-filled.png" className="img-fluid nav_icon" alt="Logo" style={{   width:"40px",display: 'none' }} />
                    </a>
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
                                <a className="nav-link active btn btn-success me-5 text-white fw-bold" aria-current="page" href="#">
                                    Get App
                                </a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link text-white fw-bold" href="play">
                                    Play
                                </a>
                            </li>
                            <li className="nav-item me-5 ">
                                <a className="nav-link text-white fw-bold" href="book">
                                    Book
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
