import React from 'react';

const validation = (props) => {
    const MIN_LENGTH = 5;
    const MAX_LENGTH = 15;
    let message;
    if (props.textLength <= MIN_LENGTH) {
        message = 'Text too short';
    } else if (props.textLength >= MAX_LENGTH) {
        message = 'Text long enough';
    } else {
        message='The length of entered text is: ' + props.textLength + ' chars';
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default validation;