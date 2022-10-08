import React from 'react'
import './PostCard.css'

function PostCard(props) {


  const tp = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, aperiam et? Aperiam sint tempora suscipit reprehenderit, fugiat, non alias tenetur ex, reiciendis quam nam quas nesciunt dolores quidem sequi quae."  

  return (
    <div className='col-lg-4 col-sm-12'>
        <div className='card'>
            <img className="card-img-top" src="https://picsum.photos/300/200"/>
            <div className="card-body">
                <h4 className='card-title'>Lorem Ipsum</h4>
                <p className='card-text'>{tp.substring(0, 75) + "..."}</p>
                <a className="text-decoration-none" href="#">View More</a>
            </div>
        </div>
    </div> 
  )
}

export default PostCard;