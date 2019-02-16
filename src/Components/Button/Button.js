import React from 'react';

function Button(props){
    return (
        <button class="btn btn-outline-success" onClick={() => props.getbook()}>Get Books!</button>
    )
}


export default Button;