import React, {Component} from 'react';
import './style/CryptoDetails.css';
import Detail from './Detail';


class CryptoDetails extends Component{
    render(){
        const {dateAdded, lastUpdated, totalSuply, change1Hour, change24Hours, change7Days} = this.props;
        return(
            <div className="crypto-details">
                <div className="column-2">
                    <Detail 
                        name="Date added:"
                        value={dateAdded.split('T')[0]}
                    />
                    <Detail 
                        name="Last updated:"
                        value={lastUpdated.split('T')[0]}
                    />
                    <Detail 
                        name="Total suply:"
                        value={totalSuply}
                    />
                </div>
                <div className="column-2">
                    <Detail 
                        name="Change(1h):"
                        value={change1Hour}
                    />
                    <Detail 
                        name="Change(24h):"
                        value={change24Hours}
                    />
                    <Detail 
                        name="Change(7d):"
                        value={change7Days}
                    />
                </div>
            </div>
        )
    }
}

export default CryptoDetails;