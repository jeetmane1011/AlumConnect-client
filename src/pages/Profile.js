import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Gallery-Comp/ProfileHeader.jsx'
import Body from '../components/Gallery-Comp/ProfileBody.jsx'
import Posts from '../components/Gallery-Comp/ProfilePosts.jsx'
import '../App.css';

export default function Profile(){
    const {userid} = useParams();

    return (
        <div  className="gallery-body p-5">                        
            <div className='bg-light rounded m-5 shadow'>
                <Header 
                    name="Jeet Mane" 
                    img="" 
                    city="Mumbai, India"
                />
                <Body
                    job='Student'
                    institute='Rajiv Gandhi Institue of Technology'
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <Posts />
            </div>
        </div>
        
    );
}