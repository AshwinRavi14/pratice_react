import React from "react";
import Button from '../Button/Button';
import image from '../../Image/placholder.webp'
function Card(){
    return(
        <div className='Card'>
        <div className='image'>
        <img src={image} alt='placeholder'></img>
        </div>
        <h1>Heading</h1>
        <p>This paragraph converter tool will convert your multi-line paragraph text into one single line of text with no line breaks.</p>
        <Button value="Edit" color ="Blue"/>
        <Button value="Delete" color ="Red"/>
    </div>
    )
}
export default Card;