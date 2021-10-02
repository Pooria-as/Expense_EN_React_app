import React from 'react';
import "./Card.css"
const Card = props=>
{
    const CardClasess='card '+props.className
    return(
        <div className={CardClasess}>
            {props.children}
        </div>
    );
}
export default Card