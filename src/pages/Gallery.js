import React from 'react';
import Card from '../components/Gallery-Comp/ProfileCard';
import Json_data from '../data/MOCK_DATA.json';
import {useState} from 'react';
import ImageSection from '../components/Home-Comp/ImageSection';
import '../App.css';
import '../components/Gallery-Comp/styles.css'

export default function Gallery(){
    const loadProfiles = 16;
    const [searchName, setSearchName] = useState("");
    const [next, setNext] = useState(loadProfiles)

    const handleMoreProfiles = () => {
        setNext(next + loadProfiles);
    };

    return (
        <div className='gallery-body'>
            <ImageSection page="gallery" title="Gallery"/>
            <div className='input-group p-3 bg-dark shadow-lg'>
                <input className='form-control rounded' type='search' placeholder="Search alumni..." aria-label="Search" aria-describedby="search-addon" onChange={(event)=>{
                    setSearchName(event.target.value);
                }}/>
            </div>
            <div className='flex-container mt-3'>
                {Json_data.filter((val)=>{
                    if (searchName === ""){
                        return val;
                    }else if (val.name.toLowerCase().includes(searchName.toLowerCase())){
                        return val;
                    }
                }
                ).slice(0, next).map((card, index) => {
                    return <Card key={index} img={card.img} name={card.name} passOut={card.passOut} worksAs={card.worksAs} worksAt={card.worksAt}/>
                })}
            </div>
            <div className='d-flex justify-content-center'>
                {(next < Json_data.length && searchName==="") && (
                <button className="btn btn-sm btn-outline-dark my-4" onClick={handleMoreProfiles}>
                    Load more
                </button>
                )}
            </div>
        </div>
    );

}