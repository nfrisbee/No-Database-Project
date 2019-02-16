import React from 'react';

function Button(props){
    return (
        <button onClick={() => props.getbook()}>Get Books!</button>
    )
}


export default Button;