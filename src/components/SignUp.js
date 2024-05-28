// SignupForm.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../FirebaseConfig";
import { updateProfile } from "firebase/auth";

const SignupForm = ({ toggleForm, onSuccess }) => {
    const [formData, setFormData] = useState({
        displayName: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
            console.log(user ," user data")
            await updateProfile(user, {
                displayName: formData.displayName,
            });
           
            onSuccess();
        } catch (error) {
            console.error("Error signing up:", error);
            setError(error.message);
        }
    };

    return (
        <div className="container col-12 col-sm-8 d-flex justify-content-center align-items-center ">
            <div className="row">
                <div className="col-12 col-sm-6" style={{ backgroundImage: "url(https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Flogin-bg.png&w=3840&q=75)", backgroundSize: 'cover' }}>
                    <img src="https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Flogin-top.png&w=3840&q=75" className="img-fluid mt-5" alt="Login background" />
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-center border border-2 rounded">
                    <form onSubmit={handleSubmit} className="text-center w-100">
                        <h2>Signup Form</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-start">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="displayName"
                                name="displayName"
                                value={formData.displayName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        <button className="btn btn-success mb-3" type="submit">Sign Up</button>
                        <p>Already have an account? Click to</p>
                        <button className="btn btn-secondary" onClick={toggleForm} type="button">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
