import React from 'react';
import './OpportunitySection.css';
import CalCardComponent from './CalCardComponent.js'

function OpportunitySection() {

  return (
    <div className='opp-container'>
        <div  className='opp-events'>
            <div className='opp-events-title'>
                <h1>All Opportunites</h1>
            </div>
            <div className='opp-cards-wrapper'>
                <div className='opp-cards-indv'>
                    <CalCardComponent 
                        heading = 'Software Tester'
                        timing = 'Miracare Systems    |    Mumbai(Remote)'
                        venue = 'Unpaid    |     Click here to see details'
                    />
                </div>
                <div className='opp-cards-indv'>
                    <CalCardComponent 
                        heading = 'Software Tester'
                        timing = 'Miracare Systems    |    Mumbai(Remote)'
                        venue = 'Unpaid    |     Click here to see details'
                    />
                </div>
                <div className='opp-cards-indv'>
                    <CalCardComponent 
                       heading = 'Software Tester'
                       timing = 'Miracare Systems    |    Mumbai(Remote)'
                       venue = 'Unpaid    |     Click here to see details'
                   />
                </div>
                <div className='opp-cards-indv'>
                    <CalCardComponent 
                        heading = 'Software Tester'
                        timing = 'Miracare Systems    |    Mumbai(Remote)'
                        venue = 'Unpaid    |     Click here to see details'
                    />
                </div>
                <div className='opp-cards-indv'>
                    <CalCardComponent 
                        heading = 'Software Tester'
                        timing = 'Miracare Systems    |    Mumbai(Remote)'
                        venue = 'Unpaid    |     Click here to see details'
                    />
                </div>
                <div className='opp-cards-indv'>
                    <CalCardComponent 
                        heading = 'Software Tester'
                        timing = 'Miracare Systems    |    Mumbai(Remote)'
                        venue = 'Unpaid    |     Click here to see details'
                    />
                </div>
                <div className='opp-cards-indv'>
                    <CalCardComponent 
                        heading = 'Software Tester'
                        timing = 'Miracare Systems    |    Mumbai(Remote)'
                        venue = 'Unpaid    |     Click here to see details'
                    />
                </div>
                <div className='opp-cards-indv'>
                    <CalCardComponent 
                        heading = 'Software Tester'
                        timing = 'Miracare Systems    |    Mumbai(Remote)'
                        venue = 'Unpaid    |     Click here to see details'
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default OpportunitySection;