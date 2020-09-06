import React from 'react';
import Button from '@material-ui/core/Button';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <a href="/login"><button>Login</button></a>
      <br />
      <br />
      <br />
      <a href="/blogs"><button>Show All Blogs</button></a>
      <br />
      <br />
      <a href="https://github.com/genialkartik/Blog-Socketio" rel="noopener noreferrer" target="_blank">
        <Button
          style={{ backgroundColor: 'blue' }}
        >Github</Button>
      </a>
      <br />
      <br />
      <div>
        <p>In case Website doen't open on Cloud. Check out here for atlernative</p>
      </div>
      <a href="https://gitpod.io/start/#bd8ae49e-acfc-4843-a602-d2df1fe1502c" rel="noopener noreferrer" target="_blank">
        <Button
          style={{ backgroundColor: 'blue' }}
        >GitPod</Button>
      </a>

    </div>
  )
}

export default HomePage;