import './css/App.css';
import BackgroundUpdater from './Nav';


import React, { useState, useEffect } from 'react';

function App() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function getTitle() {
        return currentDate.getMinutes() % 2 === 0 ? "SCUDERIA" : "PORSCHE";
    }

    return (
        <div className = "title-container">
            <h1 className= "title">
                <img src="images/german_flag.png" className="country-img" alt="German Flag" />  
                {getTitle()}
            </h1>
        <BackgroundUpdater/>    
        </div>

  
    );
}

export default App;