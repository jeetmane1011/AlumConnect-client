import React from 'react';
import {useLocation} from 'react-router-dom'
import Header from '../components/Gallery-Comp/ProfileHeader.jsx'
import Body from '../components/Gallery-Comp/ProfileBody.jsx'
import Posts from '../components/Gallery-Comp/ProfilePosts.jsx'
import ImageSection from '../components/Home-Comp/ImageSection';
import '../App.css';

export default function Profile(){

    const {state} = useLocation();
    return (
        <div  className="gallery-body" style={{margin: "80px auto auto"}}>                        
            {/* <ImageSection page="gallery" title="Gallery"/> */}
            <div className='bg-light rounded m-5 shadow'>
                <Header 
                    name={state.name} 
                    img={state.img} 
                    city="Mumbai, India"
                    
                />
                {console.log(state.body)}
                <Body
                    job={state.worksAs}
                    institute={state.worksAt}
                    desc={state.body}
                />
                <Posts />
            </div>
        </div>
        
    );
}