import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBookCards } from "../Api";
import { getBookcardsStart, getBookcardsSuccess, getBookcardsError } from "../Redux/Actions/Action";

const BookCards = ({
    isLoadingBookCards,
    bookCards,
    bookCardsError,
    getBookcardsStart,
    getBookcardsSuccess,
    getBookcardsError
}) => {
    const [filter, setFilter] = useState('venues');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching book cards...");
            getBookcardsStart();
            try {
                const cardData = await getBookCards();
                getBookcardsSuccess(cardData);
            } catch (error) {
                getBookcardsError(error);
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); 
    }, [getBookcardsStart, getBookcardsSuccess, getBookcardsError]);

    const handleFilterChange = (status) => {
        setFilter(status);
    };

    const handleCardClick = (id) => {
        navigate(`/card-details/${id}`);
    };

    const filteredCards = bookCards.filter(card => filter === 'all' || card.status === filter);

    return (
        <>
            <div className="container-fluid border border-2 bg-white position-sticky z-1" style={{ top: '0', zIndex: '1000' }}>
                <div className="d-flex justify-content-between col-12 col-sm-3">
                    <p
                        onClick={() => handleFilterChange('venues')}
                        className={filter === 'venues' ? 'active-filter' : ''}
                        style={{ cursor: 'pointer' }}
                    >
                        Venues(6)
                    </p>
                    <p
                        onClick={() => handleFilterChange('coaching')}
                        className={filter === 'coaching' ? 'active-filter' : ''}
                        style={{ cursor: 'pointer' }}
                    >
                        Coaching(6)
                    </p>
                    <p
                        onClick={() => handleFilterChange('events')}
                        className={filter === 'events' ? 'active-filter' : ''}
                        style={{ cursor: 'pointer' }}
                    >
                        Events(6)
                    </p>
                    <p
                        onClick={() => handleFilterChange('deals')}
                        className={filter === 'deals' ? 'active-filter' : ''}
                        style={{ cursor: 'pointer' }}
                    >
                        Deals(6)
                    </p>
                </div>
            </div>

            {isLoadingBookCards ? (
                <div className="text-center mt-3">Loading...</div>
            ) : bookCardsError ? (
                <div className="text-center mt-3">Error: {bookCardsError.message}</div>
            ) : (
                <div className="container cardsContainer mt-3">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
                        {filteredCards.map((item) => (
                            <div
                                className="col d-flex justify-content-center align-items-center"
                                key={item.id}
                                onClick={() => handleCardClick(item.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="card">
                                    <div className="position-relative">
                                        <img src={item.img} className="img-fluid" alt="Card image" />
                                        <button className="btn btn-success position-absolute bottom-0 end-0 m-2">Bookable</button>
                                    </div>
                                    <div className="card-body d-flex justify-content-between align-items-start">
                                        <div>
                                            <h5 className="card-title text-start">{item.name}</h5>
                                            <p className="card-text text-start">{item.loc}</p>
                                            <p className="text-start">
                                                <Icon icon={item.icon} />
                                                {item.time}
                                            </p>
                                            <p className="text-start">{item.batch}</p>
                                        </div>
                                        <div>
                                            <p className="mb-0">
                                                <Icon icon={item.staricon} />
                                                {item.rating}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    isLoadingBookCards: state.isLoadingBookCards,
    bookCards: state.bookCards,
    bookCardsError: state.bookCardsError
});

const mapDispatchToProps = (dispatch) => ({
    getBookcardsStart: () => dispatch(getBookcardsStart()),
    getBookcardsSuccess: (data) => dispatch(getBookcardsSuccess(data)),
    getBookcardsError: (error) => dispatch(getBookcardsError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCards);
