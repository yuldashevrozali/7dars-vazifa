import React, { useState } from 'react';
import './index.css';

export default function Eng(props) {
    const {lang, lang2} = props;
    const [text, setText] = useState('');

    function handleInput(e) {
        const inputValue = e.target.value; 
        setText(inputValue); 
    }

    function svgclick() {
        
    }

    return (
        <div className="eng">
            <div className="header">
                <p >{lang}</p>
                <svg onClick={svgclick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                    <path fillRule="evenodd" d="M11.8.603a.5.5 0 0 0-.8.4v2H1a1 1 0 1 0 0 2h10v2a.5.5 0 0 0 .8.4l3.997-3a.5.5 0 0 0 0-.8l-3.997-3ZM5 13.003v2a.5.5 0 0 1-.8.4l-3.997-3a.5.5 0 0 1 0-.8l3.997-3a.5.5 0 0 1 .8.4v2h10a1 1 0 0 1 0 2H5Z" clipRule="evenodd"></path>
                </svg>
                <p>{lang2}</p>
            </div>
            <div className="hr"></div>
            <div className="hero">
                <div className="block">
                    <textarea value={text} onInput={handleInput} name="text" id="translate" cols="30" rows="10"></textarea>
                </div>
                <div className="block"></div>
            </div>
        </div>
    );
}
