import React, { useEffect } from 'react';
import Card from '../components/Gallery-Comp/ProfileCard';
// import Json_data from '../data/MOCK_DATA.json';
import {useState} from 'react';
import ImageSection from '../components/Home-Comp/ImageSection';
import './Gallery.css';
import axios from 'axios';
import {useAuth} from '../Context/AuthProvider.js';
import NoUser from '../components/Gallery-Comp/NoUser';

export default function Gallery(){
    const {user} = useAuth();
    const loadProfiles = 16;
    const [searchName, setSearchName] = useState("");
    const [next, setNext] = useState(loadProfiles)
    const [result, setResult] = useState([]);

    useEffect(()=>{
        if(user){
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            axios.get('/community/user', config).then((res)=>{
                setResult(res.data);
            }).catch(err=>{
                console.log(err);
            });
        }
    })

    const handleMoreProfiles = () => {
        setNext(next + loadProfiles);
    };

    function handleSearch(e){
        setSearchName(e.target.value);
    }

    return (
        <div className='gallery-body'>
            <ImageSection page="gallery" title="Gallery"/>
            {user?
            <>
                <div className='input-group p-3 bg-dark shadow-lg'>
                    <input className='form-control rounded' type='search' placeholder="Search alumni..." aria-label="Search" aria-describedby="search-addon" onChange={handleSearch}/>
                </div>
                <div className='flex-container justify-content-start p-4 m-4'>
                    {/* eslint-disable-next-line */}
                    {result.filter((val)=>{
                        if (searchName === ""){
                            return val;
                        }else if (val.name.toLowerCase().includes(searchName.toLowerCase())){
                            return val;
                        }
                    }
                    ).slice(0, next).map((card,index) => {
                        return <Card key={index} img={card.pic} name={card.name} id={card._id} worksAs="Student" worksAt="Rajiv Gandhi Institute of technology"/>
                    })}
                </div>
                <div className='d-flex justify-content-center'>
                    {(next < result.length && searchName==="") && (
                    <button className="btn btn-sm btn-dark my-4" onClick={handleMoreProfiles}>
                        Load more
                    </button>
                    )}
                </div>
            </>:
            <div className='no-user'>
                <NoUser />
            </div>
            }
        </div>
    );

}