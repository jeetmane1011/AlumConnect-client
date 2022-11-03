import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Gallery-Comp/ProfileHeader.jsx'
import Body from '../components/Gallery-Comp/ProfileBody.jsx'
import Posts from '../components/Gallery-Comp/ProfilePosts.jsx'
import '../App.css';
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
                    name={details?.name} 
                    img={details?.pic.url} 
                    city={details?.city}
                    country={details?.country}
                    facebook={details?.facebook}
                    instagram={details?.instagram}
                    linkedin={details?.linkedin}
                    github={details?.github}
                />
                <Body
                job={details?.worksAs}
                institute={details?.worksAt}
                desc={details?.description}
                gender={details?.gender}
                age={details?.age}
                />
                <Posts />
            </div>
            }
        </div>
        
    );
}