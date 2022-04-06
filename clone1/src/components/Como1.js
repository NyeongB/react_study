import React from 'react';
import './Como1.css'

const como1 = props => {


    return (
        <div>
            <h1>Random Number Generator</h1>
            <h2>{props.number}</h2>
            <h2>{props.lotto}</h2>
            <div>
                {props.lotto.map( (i,idx) => {
                return (
                    <div className={`ball ball${idx+1}`}>{i}</div>
                    );
                })}
            </div>
        </div>
    );
};

export default como1;