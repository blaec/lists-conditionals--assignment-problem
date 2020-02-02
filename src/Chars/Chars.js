import React from 'react';
import './Chars.css'

const chars = (props) => {
    return (
        <div className='block'
             onClick={props.click}>
                {props.character}
        </div>
    );
};

export default chars;