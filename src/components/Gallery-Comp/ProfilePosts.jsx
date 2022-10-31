import React from 'react';
import './ProfilePosts.css';
import PostCard from './PostCard.jsx'

function ProfilePosts() {
  return (
    <div className='posts-body m-5 pb-5'>
        <div className='d-flex justify-content-between'>
          <h3><b>Recent Posts</b></h3>
          <a href="#" className='text-decoration-none text-muted'>Show all</a>
        </div>
        <div className='row g-3 my-1'>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    </div>
  );
}

export default ProfilePosts;