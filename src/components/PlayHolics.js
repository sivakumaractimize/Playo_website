import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';


const PlayHolics = () => {


    const data = [

        { id: 1, name: "Jose John ", p: "I love using this app. Very convenient to book courts for the weekends. Also the notification about upcoming events is also a cool feature ", img: "https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Ftestimony-img1.png&w=1920&q=75" },
        { id: 2, name: "Shalini Roy ", p: "Amazing App. It's a nice idea. I had badminton courts nearby but didn't able to find players. The app helped me to find within 10mins!!", img: "https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Ftestimony-img2.png&w=1920&q=75" },
        { id: 3, name: "Sagar Agarwal", p: "Useful app In the midst of nonsense app making and backup. Playo is a comfortable one. It's here to stay. Need more speed. Kudos.", img: "https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Ftestimony-img3.png&w=1920&q=75" },
        { id: 4, name: " Arun Mohan", p: "Love the app.. helps me meet sports enthusiasts n play anytime anywhere", img: "https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Ftestimony-img4.png&w=1920&q=75" },
        { id: 5, name: "Rizwan", p: "Best app for booking courts around your locality and book. It helped me alot. Thanks", img: "https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Ftestimony-img5.png&w=1920&q=75" },
        { id: 6, name: "Megha Prakesh", p: "The best app I have seen.. This is exclusively for sports lovers", img: "https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2Ftestimony-img6.png&w=1920&q=75" }


    ]

    return (
        <>
            <div className="container   ">
                <div className="mt-5 text-start onestop ">  <h1 className="fs-3 fw-bold ms-5">Verified By Playoholics</h1></div>



                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-sm-4 p-2 border border-1 d-flex align-items-center">
                        <img
                            src="https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fsm-playstore.png&w=1920&q=60"
                            className="img-fluid ms-5 me-2"
                            style={{ width: '60px' }}
                            alt="Play with players around you"
                        />
                        <div className="ms-5">
                            <h1>4.7 <Icon icon="noto:star" /></h1>
                            <h6>13.5k+ ratings</h6>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 p-2 border border-1 d-flex align-items-center">
                        <img
                            src="https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fsm-apple.png&w=1920&q=60"
                            className="img-fluid ms-5 me-2"
                            style={{ width: '60px' }}
                            alt="Play with players around you"
                        />
                        <div className="ms-5">
                            <h1>4.5 <Icon icon="noto:star" /></h1>
                            <h6>3k+ ratings</h6>
                        </div>
                    </div>
                </div>

                <div className="container cards-container justify-content-center   row  mt-5">

                    {data.map((item) => (
                        <div className=" col-12 card col-sm-2 col-md-3 col-lg-3 card mb-3 ms-2 text-start " key={item.id} style={{ width: "25rem" }}>
                            <div className="card-body">
                                <p>{item.p}</p>

                                <h5 className="mt-2">{item.name}</h5>
                                {[...Array(5)].map((_, index) => (
                                    <Icon key={index} icon={"emojione:star"} />
                                ))}
                                <img src={item.img} className="img-fluid float-end " style={{ width: '60px' }}></img>
                            </div>
                        </div>
                    ))}
                  








                </div>

                <div className="container row">
                    <div className="col-12 col-sm-6">
                   <img  src="https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2Fstatic_pages%2FGroup%2B6232.png&w=640&q=60" className="img-fluid" style={{ width: "400px" }}></img>
                    </div>
                    <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center flex-column mt-2">

                        <h1 className="fs-1 fw-bold">Get Fit The Fun Way!</h1>
                        <p>Join the community of 2+ million users - find games, book with</p>
                        <p>a few taps, and be a part of the amateur sports revolution! </p>
                        <button className='btn btn-success fw-bold  mt-5 fs-2 '>Join playo <Icon icon="mingcute:google-play-fill" /><Icon icon="ic:baseline-apple" /></button>

                    </div>



                </div>

            </div>



        </>
    )
}
export default PlayHolics;