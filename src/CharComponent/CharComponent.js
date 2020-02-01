import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
    let chars = props.chars.split('');
    let result = new Array(chars.length);
    for (let i = 0; i < chars.length; i++) {
        result.push(<span>{chars[i]}</span>);
    }
    return result;
};

export default charComponent;