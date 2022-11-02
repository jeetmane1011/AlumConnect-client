import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Gallery-Comp/ProfileHeader.jsx'
import Body from '../components/Gallery-Comp/ProfileBody.jsx'
import Posts from '../components/Gallery-Comp/ProfilePosts.jsx'
import '../App.css';
import axios from 'axios';
import { useAuth } from '../Context/AuthProvider.js';
import { useToast } from '@chakra-ui/react';

export default function Profile(){
    const { user, setUser, fetchUserDetails } = useAuth();
    const {userid} = useParams();
    const [details, setDetails] = useState("");
    const toast = useToast();
    const navigate = useNavigate();

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    };

    useEffect(()=>{
        if(user){        
            fetchUserDetails(userid, config).then((res)=>{
                setDetails(res[0]);
              }).catch(err=>{
                toast({
                    title: err.message,
                    status: "warning",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom",
                });
              })
        }else{
            console.log(user);
            setUser(localStorage.getItem("userInfo"));
            navigate('/');
        }
        // eslint-disable-next-line
}, []);

    return (
        <div  className="gallery-body p-5">                        
            {details &&  
            <div className='bg-light rounded m-5 shadow'>
                <Header 
                    name={details.name} 
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
            }
        </div>
        
    );
}