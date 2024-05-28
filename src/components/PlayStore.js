import React, { useState, useEffect } from "react";
import Nav2 from "../components/Nav2";
import { Icon } from '@iconify/react';

const PlayStore = () => {

    return(<>
    
    <div className="col-12 col-sm-8 mb-5" style={{ backgroundColor: "rgb(241 243 242)" }}>
    <div className="row mt-5 text-start align-items-center mb-5">
        <div className="col-12 col-md-8 onestop">
            <h6 className="fs-5 ms-2 fw-bold ms-3 ">You can join the game only on the mobile app</h6>
        </div>
        <div className="col-12 col-md-4 text-center text-md-start">
            <button className='btn btn-success fw-bold mt-2 mt-md-0'>
                Join playo <Icon icon="mingcute:google-play-fill" /> <Icon icon="ic:baseline-apple" />
            </button>
        </div>
    </div>
</div>

    
    
    </>)
}
export default PlayStore;
