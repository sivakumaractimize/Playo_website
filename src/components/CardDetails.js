import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getInfoCardById } from "../Api";
import { connect } from 'react-redux';
import { getCardinfostart, getCardinfosuccess, getCardinfoerror } from '../Redux/Actions/Action';

const CardDetails = ({ cardDetails, loading, getCardinfostart, getCardinfosuccess, getCardinfoerror }) => {
    const { id } = useParams();

    useEffect(() => {
        const fetchCardDetails = async () => {
            getCardinfostart();
            try {
                const allCards = await getInfoCardById();
                // console.log("All Cards:", allCards);

                const cardsArray = Object.values(allCards);
                const matchedCard = cardsArray.find(card => card.id === parseInt(id));
                // console.log("Matched Card:", matchedCard);

                getCardinfosuccess(matchedCard);
            } catch (error) {
                console.error('Error fetching card details:', error);
                getCardinfoerror(error);
            }
        };

        fetchCardDetails();
    }, [id, getCardinfostart, getCardinfosuccess, getCardinfoerror]);

    if (loading) {
        return <div className="text-center mt-3">Loading...</div>;
    }

    if (!cardDetails) {
        return <div className="text-center mt-3">Card not found</div>;
    }

    return (
        <div className="container">
            <p className="text-start">{cardDetails.status} &gt; Bangalore &gt; {cardDetails.name}</p>
            <h1 className="fs-4 text-start">{cardDetails.title}</h1>
            <div className="text-start d-flex">
                <p className="">{cardDetails.loc}</p>
                <p className="ms-2">
                    <Icon icon="noto:star" />
                    {cardDetails.rating}(1 rating)
                </p>
            </div>

            <div className='col-12 d-flex flex-column flex-sm-row'>
                <div className="carousel col-12 col-sm-8">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <img src={cardDetails.img1} className='img-fluid' alt="slide1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={cardDetails.img2} className='img-fluid' alt="slide2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={cardDetails.img3} className='img-fluid' alt="slide3" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='col-12 col-sm-4 mt-3 mt-sm-0 ms-2'>
                    <button className='btn btn-success col-12'>Book Now</button>
                    <div className='mt-2'>
                        <button className='btn border border-dark text-dark col-sm-5 text-center fw-bold'>
                            <Icon icon="material-symbols:share" /> Share
                        </button>
                        <button className='btn text-success border border-success col-sm-5 ms-1 fw-bold'>
                            Bulk/Corp.
                        </button>
                    </div>
                    <div className='border border-1 mt-3'>
                        <h6 className='text-start'>Timings</h6>
                        {parseInt(id) >= 12 && parseInt(id) < 18 && (
                            <>
                                <p className='text-start ms-2'>Every Weekend</p>
                            </>
                        )}
                        <p className='text-start'>6:00 AM - 10:00 PM</p>
                    </div>
                    <div className='border border-1 mt-3'>
                        <h6 className='text-start fw-bold'>Location</h6>
                        <p className='text-start'>Gate 3, No.2, {cardDetails.loc}, Bangalore - 560001</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1944.010703082337!2d77.594378!3d12.970482!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1716550231684!5m2!1sen!2sus"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            {parseInt(id) <= 6 && (
                <>
                    <div className='border border-2'>
                        <h6 className='text-start mt-3 ms-3'>Sports Available (Click on sports to view price chart)</h6>
                        <div className='text-center mt-5 mb-2 border border-1 border-dark col-sm-1 col-md-2'>
                            <Icon
                                icon={cardDetails.icon}
                                width="62"
                                height="62"
                                type="button"
                                className="btn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            />
                            <p className='fw-bold'>{cardDetails.sport}</p>
                        </div>
                    </div>

                    <div className='border border-2 mt-2 mb-3'>
                        <h6 className='text-start mt-3 ms-3'>Amenities</h6>
                        <div className='row ms-1'>
                            <div className='col-4 col-md-2'>
                                    <p className='text-start d-flex'>
                                        <Icon icon="teenyicons:tick-circle-solid" width="1.2em" height="1.2em" className='text-success' />
                                    <p className='ms-1'>{cardDetails.a1}</p> 
                                    </p>
                            </div>
                            <div className='col-4 col-md-2'>
                            <p className='text-start d-flex'>
                                <Icon icon="teenyicons:tick-circle-solid" width="1.2em" height="1.2em" className='text-success' />
                               <p className='ms-1'> {cardDetails.a2}</p>
                            </p>
                            </div>
                            <div className='col-4 col-md-2'>
                            <p className='text-start d-flex'>
                                <Icon icon="teenyicons:tick-circle-solid" width="1.2em" height="1.2em" className='text-success' />
                                <p className='ms-1'>{cardDetails.a3}</p>
                            </p>
                            </div>
                            
                            
                        </div>

                    </div>
                    <div className='border border-2 mt-2 mb-3 text-start'>
                        <h6 className='text-start mt-3 ms-3'>About Venue</h6>
                        <div className='ms-3'>
                            <p>{cardDetails.sport} :</p>
                            <p className='ms-5'>{cardDetails.ab1}</p>
                            <p className='ms-5'>{cardDetails.ab2}</p>
                            <p className='ms-5'>{cardDetails.ab3}</p>
                        </div>
                    </div>
                </>
            )}
            {parseInt(id) >= 6 && parseInt(id) < 12 && (
                <>
                    <div className='border border-2'>
                        <h6 className='text-start mt-3 ms-3'>Over View</h6>
                        <p className='text-start'>{cardDetails.O1}</p>
                    </div>

                    <div className='border border-2 mt-2 mb-3'>
                        <h6 className='text-start mt-3 ms-3'>Ages</h6>
                        <p className='text-start ms-2'>{cardDetails.age1}</p>
                    </div>

                    <div className='border border-2 mt-2 mb-3 text-start '>
                        <h6 className='text-start mt-3 ms-3'>Timings</h6>
                        <p className='ms-2'>weekdays</p>
                        <p>{cardDetails.t1}</p>
                        <p>{cardDetails.t2}</p>
                        <p className='ms-2'>weekends</p>
                        <p>{cardDetails.t3}</p>
                        <p>{cardDetails.t4}</p>

                    </div>

                    <div className='border border-2 mt-2 mb-3 text-start'>
                        <h6 className='text-start mt-3 ms-3'>Aims & Objectives</h6>
                        <p className='ms-2'>{cardDetails.aim1}</p>
                        <p>{cardDetails.aim2}</p>
                        <p>{cardDetails.aim3}</p>

                    </div>
                </>
            )}
            {parseInt(id) >= 12 && parseInt(id) < 18 && (
                <>
                    <div className='border border-2 '>
                        <h6 className='text-start mt-3 ms-3'>Over View</h6>
                        <p  className='text-start ms-1'>{cardDetails.O1}</p>
                    </div>

                    <div className='border border-2 text-start mb-5'>
                        <h6 className='text-start mt-3 ms-3'>What is included in the tour</h6>
                        <p>{cardDetails.i1}</p>
                        <p>{cardDetails.i2}</p>
                        <p>{cardDetails.i3}</p>
                        <p>{cardDetails.i4}</p>
                    </div>
                </>
            )}
            {parseInt(id) >= 18 && (
                <>
                    <div className='border border-2 '>
                        <h6 className='text-start mt-3 ms-3'>Over View</h6>
                        <p className='text-start ms-1'>{cardDetails.O1}</p>
                    </div>

                    <div className='border border-2 text-start mb-5'>
                        <h6 className='text-start mt-3 ms-3'>What the Summer Camp Academy Offers:</h6>
                        <p>{cardDetails.of1}</p>
                        <p>{cardDetails.of2}</p>
                        <p>{cardDetails.of3}</p>

                    </div>
                </>
            )}



            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                {cardDetails.sport}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <p className='border border-2 rounded'>
                                Pricing is subjected to change and is controlled by venue
                            </p>
                            <h6 className='fw-bold text-start border-2 border-bottom fs-5'>
                                {cardDetails.sport}
                            </h6>
                            <p className='text-start'>Monday - Sunday</p>
                            <div className='d-flex justify-content-start border-2 border-bottom'>
                                <h6 className='me-5'>INR 369.0 / hour</h6>
                                <h6 className='me-5'>06:00 AM - 10:00 PM</h6>
                            </div>
                            <p className='text-start'>Holiday(s)</p>
                            <div className='d-flex justify-content-start'>
                                <h6 className='me-5'>INR 369.0 / hour</h6>
                                <h6 className='me-5'>06:00 AM - 10:00 PM</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    cardDetails: state.cardInfo,
    loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
    getCardinfostart: () => dispatch(getCardinfostart()),
    getCardinfosuccess: (data) => dispatch(getCardinfosuccess(data)),
    getCardinfoerror: (error) => dispatch(getCardinfoerror(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
