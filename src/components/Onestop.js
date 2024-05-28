import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Onestop = () => {

    return (
        <>
            <div className="container   ">
                <div className="mt-5 text-start onestop ">  <h1 className="fs-3 fw-bold ms-5">Your one-stop platform for sports</h1></div>
                <div className="container " style={{ backgroundColor: "rgb(238, 243, 246)" }}>
                    <div className="container ">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4 ">
                                <div className=" col-12   d-flex align-items-center mt-5">
                                    <img
                                        src="https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Fplay-with-players.png&w=1920&q=60"
                                        className="img-fluid me-2"
                                        style={{ width: '100px' }}
                                        alt="Play with players around you"
                                    />
                                    <h5 className="fw-bolder mb-0">Play with players around you</h5>
                                </div>
                                <div className=" col-12   d-flex align-items-center mt-5">
                                    <img
                                        src="https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Fskill-up-game.png&w=1920&q=60"
                                        className="img-fluid me-2"
                                        style={{ width: '100px' }}
                                        alt="Play with players around you"
                                    />
                                    <h5 className="fw-bolder mb-0">Skill-up your game</h5>
                                </div>


                            </div>
                            <img
                                src="https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Fbadminton-girl.png%3Fq%3D30%26h%3D350%26w%3D330&w=384&q=60"
                                className="img-fluid onestop-img"
                                style={{ width: '300px', margin: '0 auto' }}
                                alt="Badminton girl"
                            />
                            <div className="col-12 col-sm-6 col-md-4 mt-5 col-md-6 col-lg-6 col-xl-4 col-xxl-4 ">
                                <div className=" col-12  fs-5  d-flex align-items-center ">
                                    <img
                                        src="https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Fbook-sports-venues.png&w=1920&q=75"
                                        className="img-fluid me-2"
                                        style={{ width: '100px' }}
                                        alt="Play with players around you"
                                    />
                                    <h5 className="fw-bolder mb-0">
                                        Book sports venues nearby</h5>
                                </div>
                                <div className=" d-flex align-items-center mt-5  ">
                                    <img
                                        src="https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Fmanage-sports.png&w=1920&q=60"
                                        className="img-fluid me-2"
                                        style={{ width: '100px' }}
                                        alt="Play with players around you"
                                    />
                                    <h5 className="fw-bolder mb-0">Manage your sports activities & groups</h5>
                                </div>

                            </div>


                        </div>

                    </div>
                    <div className="container  mt-5"   >

                    <div className="row "  style={{backgroundColor:"white"}} >
                            <div className="col-12 col-sm-3 border border-1">
                                <h1>2M+</h1>
                                <h6>Users</h6>
                            </div>
                            <div className="col-12 col-sm-3 border border-1">
                                <h1>50+</h1>
                                <h6>Sports</h6>
                            </div>
                            <div className="col-12 col-sm-3 border border-1">
                                <h1>6M+</h1>
                                <h6>Sports Activities Enabled</h6>
                            </div>
                            <div className="col-12 col-sm-3 border border-1">
                                <h1>4M+</h1>
                                <h6>Player Connections Enabled</h6>
                            </div>
                            
                    </div>
                           
                <br></br>

                    </div>
                </div>





            </div>


        </>
    )
}
export default Onestop;