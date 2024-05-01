import './css/Nav.css';
import { useState,useEffect } from 'react';
import banner1 from './images/gt3rs_1.jpg';
import banner2 from './images/gt3rs_2.jpg';
import banner3 from './images/gt3rs_3.jpg';
import banner4 from './images/gt3rs.jpg';

function BackgroundUpdater() {

    const [bannerIndex, setBannerIndex] = useState(0);
    const banners = [banner1, banner2, banner3,banner4];
  
    useEffect(() => {
        const interval = setInterval(() => {
          // Update bannerIndex to show the next image
          setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000); // Change image every 5 seconds
    
        return () => clearInterval(interval); // Cleanup function to clear the interval
      }, [banners.length]);

    return (
    <div className="banner_image" style={{ backgroundImage: `url(${banners[bannerIndex]})` }}>
        <nav className='navigation'>    
        <ul>
            <li><a href="#Introduction">PORSCHE</a></li>
            <li><a href="#MyCars">MY CARS</a></li>
            <li><a href="#Configure">MY PORSCHE</a></li>
            <li><a href="#media">MEDIA</a></li>
            <li><a href="./about.html" target="_blank">About Me</a></li>
        </ul>
        </nav>
    </div>
    ); 
}

export default BackgroundUpdater;