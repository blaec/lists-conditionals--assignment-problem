import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
    return <span onClick={props.click}>{props.char}</span>;
};

export default charComponent;