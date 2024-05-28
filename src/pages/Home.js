import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import { Icon } from '@iconify/react';
import Onestop from '../components/Onestop';
import PlayHolics from '../components/PlayHolics';
import Footer from '../components/Footer';

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const titles = ['Join Games', 'Meet Players', 'Play sports', 'Book Venues'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % titles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Nav />
            <div className='home_container'>
                <div className='background_image'>
                    <img src="https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png?q=15" className="img-fluid play_icon" alt="Logo" />
                </div>
                <div className='text_container text-light'>
                    <h1 className='titles mb-5'>{titles[currentIndex]}</h1>
                    <h1 className='title_text fs-4 mt-5'>World’s Biggest Sports Community</h1>
                    <button className='btn btn-success fw-bold mt-5 playstore'>Join playo <Icon icon="mingcute:google-play-fill" /><Icon icon="ic:baseline-apple" /></button>
                </div>
            </div>
            <div>
                <Onestop />
                <PlayHolics />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
