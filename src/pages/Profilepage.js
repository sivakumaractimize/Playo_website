import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import Nav3 from "../components/Nav3";
import LoginForm from "../components/Login";
import SignupForm from "../components/SignUp";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

const Profilepage = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleToggleForm = () => {
        setShowLogin(!showLogin);
    };

    const handleSignupSuccess = () => {
        setShowLogin(true); 
    };

    const handleLoginSuccess = (loggedInUser) => {
        setUser(loggedInUser);
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <>
            <Nav3 />
            {user ? (
                <Profile user={user} onLogout={handleLogout} />
            ) : (
                showLogin ? (
                    <LoginForm toggleForm={handleToggleForm} onLoginSuccess={handleLoginSuccess} />
                ) : (
                    <SignupForm toggleForm={handleToggleForm} onSuccess={handleSignupSuccess} />
                )
            )}
            <Footer />
        </>
    );
};

export default Profilepage;
