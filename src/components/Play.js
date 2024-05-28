import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import PlayStore from "../components/PlayStore";
import { connect } from 'react-redux';
import {
  getPlaycardStart,
  getPlaycardSuccess,
  getPlaycardError,
  seeMoreStart,
  seeMoreSuccess,
  seeMoreError
} from '../Redux/Actions/Action'; 

import { getPlayCards } from "../Api";

const Play = ({
  playcards,
  isLoading,
  error,
  moreItems,
  isLoadingMore,
  moreError,
  getPlaycardStart,
  getPlaycardSuccess,
  getPlaycardError,
  seeMoreStart,
  seeMoreSuccess,
  seeMoreError
}) => {
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("See More Activities");
  const [showTitle, setShowTitle] = useState(true);

  const handleRadioClick = (radio) => {
    if (!allCards) return; 
    const filteredCards = allCards.filter(card => card.status === radio);

    if (radio === "gametime") {
      setShowTitle(false); 
    } else if (radio === "community") {
      setShowTitle(true);
    }

    if (filteredCards.length > 0) {
      setCards(filteredCards.slice(0, 3)); 
      setMessage("");
    } else {
      setCards([]);
      setMessage("https://www.kpriet.ac.in/asset/frontend/images/nodata.png");
      setTitle("");
    }
  };

  useEffect(() => {
    
    const fetchData = async () => {
      getPlaycardStart();
      try {
        const cardData = await getPlayCards();
        console.log("Fetched data:", cardData); 
        getPlaycardSuccess(cardData);
        setAllCards(cardData);
        
    
        const communityCards = cardData.filter(card => card.status === "community");
        if (communityCards.length > 0) {
          setCards(communityCards.slice(0, 3));
          setMessage("");
        } else {
          setCards([]);
          setMessage("https://www.kpriet.ac.in/asset/frontend/images/nodata.png");
          setTitle("");
        }
      } catch (error) {
        getPlaycardError(error);
      }
    };
    
    fetchData();
  }, [getPlaycardStart, getPlaycardSuccess, getPlaycardError]); 
  
  
  useEffect(() => {
    if (cards && allCards && cards.length >= allCards.length) {
      setTitle("See Less Activities");
    } else {
      setTitle("See More Activities");
    }
  }, [cards, allCards]);

  const handleSeeMoreClick = () => {
    if (!allCards) return;
    console.log("seeMoreStart function:", seeMoreStart);
    seeMoreStart();
    try {
      if (cards && cards.length >= allCards.length) {
        setCards(allCards.slice(0, 3));
        seeMoreSuccess(allCards.slice(0, 3));
      } else {
        const currentLength = cards.length;
        const additionalCards = allCards.slice(currentLength, currentLength + 3);
        setCards(prevCards => [...prevCards, ...additionalCards]);
        seeMoreSuccess([...cards, ...additionalCards]);
      }
    } catch (error) {
      seeMoreError(error);
    }
  };
  
  return(
        
        <>
            <div className="container-fluid" style={{ backgroundColor: "rgb(241 243 242)" }}>
                <br />
                <div className="container d-flex justify-content-center">
                    <div className="row col-12 d-flex justify-content-center bg-white mb-5">
                        <div className="col-12 col-sm-2 mt-5 text-start d-flex align-items-center">
                            <img src="https://playo-website.gumlet.io/playo-website-v2/share-pages/playo-logo.png" className="img-fluid" style={{ width: "80px" }} alt="Logo" />
                            <p className="m-2 ms-5 ps-2 fw-bold border border-3 rounded col-6 d-sm-none">
                                <Icon icon="fluent:location-24-regular" /> Bangalore
                            </p>
                        </div>
                        <div className="col-12 col-sm-4 text-start">
                            <div>
                                <h2 className="mt-5 fw-bold">Bangalore Activities</h2>
                                <p className="mb-5">20 Upcoming Activities</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-3 me-5 d-none d-sm-block">
                            <div className="border mt-5 border-3 rounded me-5">
                                <p className="m-2 me-3 ps-2 fw-bold d-none d-sm-block">
                                    <Icon icon="fluent:location-24-regular" /> Bangalore
                                </p>
                            </div>
                        </div>
                        <div>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="text-start">
                                    <input
                                        type="radio"
                                        name="filter"
                                        id="communityRadio"
                                        onClick={() => handleRadioClick("community")}
                                        defaultChecked
                                    />
                                    <label
                                        className="form-check-label ms-2"
                                        htmlFor="communityRadio"
                                    >
                                        Community
                                    </label>
                                    <input
                                        className="ms-2"
                                        type="radio"
                                        name="filter"
                                        id="gameTimeRadio"
                                        onClick={() => handleRadioClick("gametime")}
                                    />
                                    <label className="form-check-label ms-2" htmlFor="gameTimeRadio">
                                        Game time
                                    </label>
                                </div>
                                <div className="border border-3 rounded col-12 col-sm-3 col-xl-2 d-flex justify-content-end d-none d-sm-block">
                                    <p className="m-2 me-2 ps-2 fw-bold">
                                        <Icon icon="mdi:whistle-outline" width="30" height="35" />
                                        Badminton
                                        <Icon icon="gridicons:dropdown" width="20" />
                                    </p>
                                </div>
                            </div>
                            <p className="m-2 border border-2 rounded col-10 col-sm-4 d-block d-sm-none fw-bold">
                                <Icon icon="mdi:whistle-outline" width="30" height="35" />
                                Badminton
                                <Icon icon="gridicons:dropdown" width="25" />
                            </p>
                        </div>
                        {message ? (
                            <div className="row col-12 col-sm-10 mt-2 d-flex justify-content-center">
                                <img src={message} className="img-fluid" style={{ width: "300px" }} alt="No data" />
                            </div>
                        ) : (
                            cards.map(card => (
                                <div key={card.id} className="row border border-2 col-12 col-sm-10 mt-2 rounded p-0 shadow">
                                    <div className="col-12 col-sm-1 text-center" style={{ backgroundColor: "rgb(241 243 242)" }}>
                                        <p className="mt-5">{card.month}</p>
                                        <h4 className="mb-0">{card.date}</h4>
                                    </div>
                                    <div className="col-12 col-sm-4 text-start bg-white">
                                        <p>{card.skill}</p>
                                        <h6>{card.sport}</h6>
                                        <p className="d-flex align-items-center">
                                            <Icon icon="mdi:clock-outline" style={{ marginRight: '0.5rem' }} />
                                            {card.time}
                                        </p>
                                        <p><Icon icon="fluent:location-24-regular" style={{ marginRight: '0.5rem' }} />{card.loc}</p>
                                        <p><Icon icon="akar-icons:people-group" style={{ marginRight: '0.5rem' }} />{card.players} <Icon icon="fluent-emoji-flat:person-pouting-light" /></p>
                                    </div>
                                    <div className="col-12 col-sm-6 d-flex flex-column justify-content-end bg-white">
                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-success col-sm-3 text- mb-3">See Details</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                        {showTitle && (
                            <div className="col-12 col-sm-10 mt-3 mb-5 d-flex justify-content-center">
                                <a className="link text-success" onClick={handleSeeMoreClick} style={{ cursor: 'pointer' }}>{title}</a>
                            </div>
                        )}
                        <PlayStore />
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    playcards: state.playcards,
    isLoading: state.isLoading,
    error: state.error,
    moreItems: state.moreItems,
    isLoadingMore: state.isLoadingMore,
    moreError: state.moreError
});

const mapDispatchToProps = (dispatch) => ({
    getPlaycardStart: () => dispatch(getPlaycardStart()),
    getPlaycardSuccess: (data) => dispatch(getPlaycardSuccess(data)),
    getPlaycardError: (error) => dispatch(getPlaycardError(error)),
    seeMoreStart: () => dispatch(seeMoreStart()),
    seeMoreSuccess: (data) => dispatch(seeMoreSuccess(data)),
    seeMoreError: (error) => dispatch(seeMoreError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);
