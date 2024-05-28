import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';


const Footer = () => {
    return (
        <>
            <div className="bg-transperent">
                <div className="container text-center py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-3 mb-4 mb-md-0">
                        <img src="https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png?q=15" className="img-fluid nav_icon" alt="Logo"/>
                          <p>Your Sports Community App</p>
                          <button className='btn btn-success fw-bold '>Join playo <Icon icon="mingcute:google-play-fill" /><Icon icon="ic:baseline-apple" /></button>

                        </div>
                        <div className="col-md-6 mb-4 mb-md-0">
                            <ul className="list-unstyled text-dark d-flex flex-column ">
                                <li className="fw-bolder mb-2 mb-md-0 me-md-4">About Us</li>
                                <li className="fw-bolder mb-2 mb-md-0 me-md-4">Contact</li>
                                <li className="fw-bolder mb-2 mb-md-0 me-md-4">Careers</li>
                                <li className="fw-bolder">Partner With US</li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-dark">
                            
                            <div className="col-12 mb-3 mb-md-0 fs-2">
                            <Icon icon="fe:instagram" />
                            <Icon className="ms-2" icon="ic:baseline-facebook" />
                            <Icon className="ms-2" icon="el:linkedin" />
                            <Icon className="ms-2" icon="mdi:twitter" />
                          </div>

                        </div>
                    </div>
                </div>

                <div className="container-fluid text-center text-dark py-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-1 mb-3 mb-md-0">
                        <a href="#" className="text-reset text-decoration-white">FAQs</a>
                        </div>
                        <div className="col-12 col-md-2 mb-3 mb-md-0">
                            <a href="#" className="text-reset text-decoration-white">Privacy Policy</a>
                        </div>
                        <div className="col-12 col-md-2 mb-3 mb-md-0">
                            <a href="#" className="text-reset text-decoration-white">Terms and Conditions</a>
                        </div>
                        <div className="col-12 col-md-2 mb-3 mb-md-0">
                            <a href="#" className="text-reset text-decoration-white">Cancellation Policy</a>
                        </div>
                        <div className="col-12 col-md-4">
                           © 2023 Techmash Solutions Private Limited. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
