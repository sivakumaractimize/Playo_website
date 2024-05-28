import React, { useState } from "react";
import { Icon } from '@iconify/react';
import { auth, provider } from "../FirebaseConfig"; 
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const LoginForm = ({ toggleForm, onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            console.log("User signed in:", userCredential.user);
            onLoginSuccess(userCredential.user);
            setFormData({
                email: "",
                password: ""
            });
        } catch (error) {
            console.error("Error signing in:", error);
            setError(error.message);
        }
    };
//google sign in
    const handleClick = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
          
            const user = result.user;
            console.log("User signed in with Google:", user);
            onLoginSuccess(user);
          })
          .catch((error) => {
            // Handle errors
            console.error("Error signing in with Google:", error);
            setError(error.message);
          });
    };

    return (
        <div className="container col-12 col-sm-8 mb-5">
            <div className="row">
                <div className="col-12 col-sm-6" style={{ backgroundImage: "url(https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Flogin-bg.png&w=3840&q=75)" }}>
                    <img src="https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Flogin-top.png&w=3840&q=75" className="img-fluid mt-5" alt="Login background"></img>
                </div>
                <div className="col-12 col-sm-6 border border-2 rounded">
                    <h3 className="text-start">Log in</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
                        </div>
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </form>
                    <p>or</p>
                    <div>
                        <Icon icon="logos:google-icon" width="40" height="40" onClick={handleClick} />
                        <p>Google</p>
                    </div>
                    <p>Don't have an account? Click on</p>
                    <button className="btn btn-success" onClick={toggleForm}> signup</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
