import React from 'react';
import './CalendarSection.css';
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import CalCardComponent from './CalCardComponent.js'

function CalendarSection() {

    const [date, setDate] = useState(new Date()) 

  return (
    <div className='calendar-container'>
        <div className="cal">
            <div className="cal-container">
                <Calendar onChange={setDate} value={date}/>
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
            </div>
        </div>
        <div  className='cal-events'>
            <div className='cal-events-title'>
                <h1>All Upcoming Events</h1>
            </div>
            <div className='event-cards-wrapper'>
                <div className='event-cards-indv'>
                    <CalCardComponent 
                        date = '1'
                        month = 'OCT'
                        heading = 'Camp Emeritus 2022: Aeronaut Brewing Happy Hour'
                        timing = '8:15PM - 10:00PM'
                        venue = 'Mayor Hall, WATERFORD BUILDING, 3037, CD Barfiwala Road, Zalawad Nagar, Juhu Lane, Yadav Nagar, Andheri West,Mumbai, Maharashtra'
                    />
                </div>
                <div className='event-cards-indv'>
                    <CalCardComponent 
                        date = '1'
                        month = 'OCT'
                        heading = 'Camp Emeritus 2022: Aeronaut Brewing Happy Hour'
                        timing = '8:15PM - 10:00PM'
                        venue = 'Mayor Hall, WATERFORD BUILDING, 3037, CD Barfiwala Road, Zalawad Nagar, Juhu Lane, Yadav Nagar, Andheri West,Mumbai, Maharashtra'
                    />
                </div>
                <div className='event-cards-indv'>
                    <CalCardComponent 
                        date = '1'
                        month = 'OCT'
                        heading = 'Camp Emeritus 2022: Aeronaut Brewing Happy Hour'
                        timing = '8:15PM - 10:00PM'
                        venue = 'Mayor Hall, WATERFORD BUILDING, 3037, CD Barfiwala Road, Zalawad Nagar, Juhu Lane, Yadav Nagar, Andheri West,Mumbai, Maharashtra'
                    />
                </div>
                <div className='event-cards-indv'>
                    <CalCardComponent 
                        date = '1'
                        month = 'OCT'
                        heading = 'Camp Emeritus 2022: Aeronaut Brewing Happy Hour'
                        timing = '8:15PM - 10:00PM'
                        venue = 'Mayor Hall, WATERFORD BUILDING, 3037, CD Barfiwala Road, Zalawad Nagar, Juhu Lane, Yadav Nagar, Andheri West,Mumbai, Maharashtra'
                    />
                </div>
                <div className='event-cards-indv'>
                    <CalCardComponent 
                        date = '1'
                        month = 'OCT'
                        heading = 'Camp Emeritus 2022: Aeronaut Brewing Happy Hour'
                        timing = '8:15PM - 10:00PM'
                        venue = 'Mayor Hall, WATERFORD BUILDING, 3037, CD Barfiwala Road, Zalawad Nagar, Juhu Lane, Yadav Nagar, Andheri West,Mumbai, Maharashtra'
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default CalendarSection;