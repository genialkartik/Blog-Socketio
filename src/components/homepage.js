import React from 'react';
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div style={{ padding: '40px 100px' }}>
      <h1>Home Page</h1>
      <Link to={`/login`}><button>Login</button></Link>
      <br />
      <br />
      <br />
      <Link to={`/blogs`}><button>Show Blogs</button></Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a href="https://github.com/genialkartik/Blog-Socketio" rel="noopener noreferrer" target="_blank">
        <button>Github</button>
      </a>
      <br />
      <br />
      <div>
        <p>In case Website doesn't open on Cloud. Check out here for atlernative</p>
      </div>
      <a href="https://gitpod.io/start/#bd8ae49e-acfc-4843-a602-d2df1fe1502c" rel="noopener noreferrer" target="_blank">
        <button>GitPod</button>
      </a>
      <br />
      <h1>Stack Used: </h1>
      <ul>
        <li>Nodejs for Backend</li>
        <li>Express framework</li>
        <li>ReactJS for Frontend</li>
        <li>Socket.io for realtime data (for Current Viewers Count</li><br /><br />
        <li><b>Breakthrough concept: </b></li>
        <p>I've used Socket.io to count number of current viewers and mapped every unique socket id (current viewer id) to blog id (id of currently viewing blog) in 'map' variable of type Map <br />
        and every blog id have it's frequency (number current viewers of that particular blog) mapped in 'map2' variable of type Map.</p><br />
        <li><b>*Note</b></li>
        <p>I didn't used any database to keep it simple and easy to understand. Authenticate and validation is processing locally.</p>
      </ul>
    </div>
  )
}

export default HomePage;
