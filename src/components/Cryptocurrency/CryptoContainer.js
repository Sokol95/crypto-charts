import React from 'react';
import CryptoList from './CryptoList';
import Dropdown from './Dropdown';


const CryptoContainer = () => {
    return (
        <div className="crypto-container">
            <div className="crypto-wrapper">
                <Dropdown/>
                <CryptoList/>
            </div>
        </div>
    )
}

export default CryptoContainer;