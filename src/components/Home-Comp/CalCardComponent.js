import React from 'react';
import './CalCardComponent.css'

function CalCardComponent(props) {

  return (
    <div className='event-cards-container'>
        <div className='event-card'>
            <div className='event-card-date'>
                <h1>{props.date}</h1>
                <h3>{props.month}</h3>
            </div>
            <div className='event-card-text'>
                <h1>{props.heading}</h1>
                <h4>{props.timing}</h4>
                <p>{props.venue}</p>
            </div>
        </div>
    </div>
  );
}
export default CalCardComponent