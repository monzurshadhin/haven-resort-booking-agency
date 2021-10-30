import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();
    const handleGoToHomeButton = () =>{
        history.push('/home');
    }
    return (
        <div className="container">
        <div className="error-section ">
        <h1 className="error-message">Oops!</h1>
        <h3 className="error-name">404 - PAGE NOT FOUND</h3>
        <p className="error-description">The Page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable.</p>
        <button onClick = {handleGoToHomeButton} className="error-btn">GO TO HOMEPAGE</button>
        </div>
    </div>
    );
};

export default NotFound;