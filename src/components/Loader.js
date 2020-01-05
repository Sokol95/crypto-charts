import React from 'react';
import './style/Loader.css';

const Loader = () => {
    return (
        <div className="ui segment loader-transparent">
            <div className="ui active dimmer loader-transparent">
                <div className="ui loader loader-color"/>
            </div>
        </div>
    )
}

export default Loader;