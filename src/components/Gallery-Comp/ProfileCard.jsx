import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileCard.css'

export default function Card(props){

    const navigate = useNavigate();
    const sendData = ()=>{
        navigate('/Profile',{state: props});
    }
    const startChat = ()=>{
        navigate('/chatroom',{state: props});
    }

    return (
            <div className='profile-card'>
                <img className='profile-img' src={props.img} alt="profile-img" />
                <h5><strong>{props.name}</strong></h5>
                <h6>{props.worksAs}</h6>
                <p>{props.worksAt}</p>
                
        
                <div className='d-flex justify-content-center'>

                    <button onClick={()=>{sendData()}} className='profile-btn' type='button' >
                        View More 
                    </button>

                    <button onClick={()=>{startChat()}}className='msg-btn' type='button'>
                        <i className="fa-solid fa-lg fa-message lg me-2"></i>Chat 
                    </button>
                    
                </div>
                <div className='social-links pt-3'>
                    {/* eslint-disable-next-line */}
                    <a href="www.google.com" className='fa-brands fa-lg fa-instagram'/>
                    {/* eslint-disable-next-line */}
                    <a href="www.google.com" className='fa-brands fa-lg fa-github'/>
                    {/* eslint-disable-next-line */}
                    <a href="www.google.com" className='fa-brands fa-lg fa-linkedin'/>
                </div>
            </div>        
    );
}
