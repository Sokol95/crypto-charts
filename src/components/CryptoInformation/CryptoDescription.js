import React, {Component} from 'react';
import './style/CryptoMetadata.css'

class CryptoDescription extends Component {
    render() {
        return (
            <>
                <div className="description">
                    {this.props.description}
                </div>

            </>
        )
    }
}

export default CryptoDescription;