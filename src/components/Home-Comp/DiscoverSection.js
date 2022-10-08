import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './DiscoverSection.css';
import { Link } from 'react-router-dom';
import IconCardComponent from './IconCardComponent';

function Discover() {
    return (
      <div>
        <div className='dis-container'>
          <h1 id='dis-title'>DISCOVER</h1>
          <h1 id='dis-heading'>We believe in giving back</h1>
          <div className='dis-card-container'>
            <div className='dis-card-wrapper'>
                <div className='dis-card1'>
                  <IconCardComponent 
                  title = 'Attend an event'
                  text = 'Learn, engage, and celebrate with fellow RGITians'
                  />
                  <Link to='/events' className='dis-btns'>
                    <Button
                      buttonStyle='btn--primary'
                      buttonSize='btn--large'
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
                <div className='dis-card2'>
                  <IconCardComponent 
                  title = 'Share your talents'
                  text = 'Volunteer your time and expertise. Explore work opportunities'
                  />
                  <Link to='/events' className='dis-btns'>
                    <Button
                      buttonStyle='btn--primary'
                      buttonSize='btn--large'
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
                <div className='dis-card3'>
                  <IconCardComponent 
                  title = 'Enrich yourself'
                  text = 'Find the right resources to help you in your journey'
                  />
                  <Link to='/events' className='dis-btns'>
                    <Button
                      buttonStyle='btn--primary'
                      buttonSize='btn--large'
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
            </div>
          <div/>
          <div/>
        </div>
      </div>
      </div>
    );
  }
  
  export default Discover;