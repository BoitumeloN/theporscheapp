import './css/Nav.css';
import './css/App.css';
import { useState,useEffect } from 'react';
import banner1 from './images/gt3rs_1.jpg';
import banner2 from './images/gt3rs_2.jpg';
import banner3 from './images/gt3rs_3.jpg';
import banner4 from './images/gt3rs.jpg';

function BackgroundUpdater() {

    const [bannerIndex, setBannerIndex] = useState(0);
    const banners = [banner1, banner2, banner3,banner4];
  
    useEffect(() => {
        const interval = setInterval(() => { setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);}, 5000); 
    
        return () => clearInterval(interval);
      }, [banners.length]);

    return (
    
    <div className="banner_image" style={{ backgroundImage: `url(${banners[bannerIndex]})` }}>
        <div className= "title">
            <h1>PORSCHE</h1>
            <img src="images/german_flag.png" className="country-img" alt="German Flag"/>      
        </div>      
        <div className='navigation-options'>
                <a href="#Introduction">PORSCHE</a>
                <a href="#MyCars">MY CARS</a>
                <a href="#Configure">MY PORSCHE</a>
                <a href="#media">MEDIA</a>
                <a href="./about.html" target="_blank">ABOUT ME</a>
        </div>
        <div class="banner-info">
            <div class="banner-name-intro">
                <div class="banner-intro">THE NEW</div>
            </div>
            <div class="banner-name">
                <div class="name">911 GT3RS</div>
            </div>
        </div>
    </div>
    ); 
}

export default BackgroundUpdater;   