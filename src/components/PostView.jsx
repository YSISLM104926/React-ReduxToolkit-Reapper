import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../features/postSlice';

const PostView = () => {
    const {isLoading, posts, error} = useSelector(state=>state.postsRe)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    console.log(posts[0])
    return (
        <div>
              <h1>posts</h1>
              {isLoading && <h1>Loading....</h1>}
              {error && <h1>Failed</h1>}
              {
                posts && 
                posts.map((post)=> <h1 className='btn btn-success m-2' key={post.id}>{post?.title}</h1>)
              }
        </div>
    )
}

export default PostView