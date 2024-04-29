import  { useEffect } from 'react';
import './css/Nav.css';

function BackgroundUpdater() {
    useEffect(() => {
        function updateImage() {
            const date = new Date();
            const currentTime = date.getSeconds();
            const bannerImage = document.querySelector('.banner_image');

            if (currentTime % 2 === 0) {
               ///
            }
        }

        updateImage(); // Call initially to set the background image based on the current time
        const intervalId = setInterval(updateImage, 1000); // Update the background image every second

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(intervalId);
    }); 

    return (
    <div className="banner_image">
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