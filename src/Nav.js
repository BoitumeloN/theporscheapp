import  { useEffect } from 'react';
import './css/Nav.css'; // Import CSS file

function BackgroundUpdater() {
    useEffect(() => {
        function updateImage() {
            const date = new Date();
            const currentTime = date.getSeconds();
            const bannerImage = document.querySelector('.banner_image');

            if (currentTime % 2 === 0) {
                bannerImage.style.backgroundImage = "url(emo.png)";
            } else {
                bannerImage.style.backgroundImage = "url(image.png)";
            }
        }

        updateImage(); // Call initially to set the background image based on the current time
        const intervalId = setInterval(updateImage, 1000); // Update the background image every second

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run effect only once on mount

    return null; // Since this component doesn't render anything, return null
}

export default BackgroundUpdater;