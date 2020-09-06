import React, { useEffect, useState } from 'react';
import axios from 'axios'
import queryStr from 'query-string'
import io from 'socket.io-client'
import './blogdesc.css'

let socket;

const PostPage = ({ location }) => {
  const ENDPOINT = 'http://localhost:2020/'
  const [blogdata, setBlogdata] = useState()
  const [curV, setCurV] = useState(0)

  useEffect(() => {
    // TC = total view count
    const { id } = queryStr.parse(location.search)
    // setBlogdata([id, title, desc, TC])
    socket = io(ENDPOINT)
    axios.get('/blogdesc', { params: { id: id } })
      .then(res => {
        setBlogdata(res.data)
      })
    socket.emit('showBlog', { id }, (currentViewers) => {
      console.log(currentViewers)
      setCurV(currentViewers)
    });
  }, [ENDPOINT, location.search])
  console.log(blogdata)

  return (
    <div>
      <a href="/blogs"><button>Show All Blogs</button></a>
      {(blogdata) ?
        <div>
          <h1>Blog Description</h1>
          <div className="title">
            <h1 style={{color: 'white'}}>{blogdata.title}</h1>
          </div>
          <ul className="desc">
            <li><h4>Total Number of view: </h4></li>
            <li> {blogdata.TC}</li>
            <li><h4>Currently Viewers: </h4></li>
            <li> {curV}</li>
          </ul>
          <br />
          <div className="todo">
            <h1>Post</h1>
            <pre>{blogdata.desc}</pre>
          </div>
          <br /><br /><br />
        </div> : <p>Loading</p>
      }
    </div>
  );
}

export default PostPage;
