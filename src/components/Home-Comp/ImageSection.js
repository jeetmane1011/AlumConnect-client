import React from 'react';
import '../../App.css';
import './ImageSection.css';

function ImageSection(props){

    const addClass = props.page+" back-img"

    return(
        <div className={addClass}>
            <h1>{props.title}</h1>
        </div>
    );
}

export default ImageSection;