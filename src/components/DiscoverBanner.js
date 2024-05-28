import React from "react";

import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';


const DiscoverBanner = () => {

    return (
        <>

            <div className="container-fluid border border-2  row">
                <div className="col ">

                <h1 className="fs-4 text-start ms-5 flex-grow-1 mt-3">Discover and Book Top Sports Complexes in Bangalore Online</h1>
                </div>

               
                    <p className="col-10 col-sm-2 d-none d-sm-none d-lg-block border border-2 rounded  mt-2 mx-2 mb-2 ms-2 p-1"><Icon icon="material-symbols-light:search" width="35" height="25" /> Search by Venue Name</p>
               

                <div className="col-12 col-sm-3 mx-2 mt-1 ">
                    <p className="m-2 border border-2 rounded fw-bold ">
                        <Icon icon="mdi:whistle-outline" width="30" height="35" />
                        All Sports
                        <Icon icon="gridicons:dropdown" width="25" />
                    </p>
                </div>

            </div>




        </>

    )
}
export default DiscoverBanner;