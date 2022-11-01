import React from 'react'

// Set default image for first tab
import image from '../../assets/destination/image-moon.webp';

let oldImage = 0;

function changeImage(newImage) {
    
    // console.log(newImage);
    
    if(newImage !== oldImage) {
        image = require(`../../assets/destination/image-${newImage}.webp`);
        oldImage = newImage;

        // console.log('changed');
    }
    return;
}


export default function DestinationImage(props) {
    
    changeImage(props.img);
    return (
        <img src = {image} alt = "Destination" className="max-w-[14rem] md:max-w-2xl xl:max-w-full"></img>
    )
}

