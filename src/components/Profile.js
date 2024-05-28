import React from "react";
import { auth } from "../FirebaseConfig";
import { signOut } from "firebase/auth";

const Profile = ({ user }) => {
    console.log(user)
    

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-6 border border-2">
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-367-456319.png?f=webp&w=256" className="img-fluid" alt="Profile" />
                <h3> Name: {user.displayName || "Name not set"}</h3>
                <h3 className="fs-5">{user.email}</h3>
                <div className="mb-5">
                    <button className="btn btn-success">All Bookings</button>
                    <button className="btn btn-warning ms-2">Edit Profile</button>
                    {/* <button className="btn btn-danger ms-2" onClick={handleLogout}>Logout</button> */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
