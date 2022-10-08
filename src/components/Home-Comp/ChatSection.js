import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './ChatSection.css';
import IconCardComponent from './IconCardComponent';

function ChatRoom() {
    return (
      <>
        <div className='chat-container'>
          <h1 id='chat-title'>COMMUNITY</h1>
          <h1 id='chat-heading'>Connect like never before</h1>
          <div className='icon-card-container'>
            <div className='icon-card-wrapper'>
                <div className='icon-card1'>
                  <IconCardComponent 
                  text = 'Network with like-minded peers and alumni boosting engagement and growth helping in your all round development'
                  />
                </div>
                <div className='icon-card2'>
                  <IconCardComponent 
                  text = 'Network with like-minded peers and alumni boosting engagement and growth helping in your all round development'
                  />
                </div>
                <div className='icon-card3'>
                  <IconCardComponent 
                  text = 'Network with like-minded peers and alumni boosting engagement and growth helping in your all round development'
                  />
                </div>
            </div>
          <div/>
          <div className='chat-btns'>
            <Button
              className='btns'
              buttonStyle='btn--new'
              buttonSize='btn--large'
            >
              GO TO CHAT
            </Button>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default ChatRoom;