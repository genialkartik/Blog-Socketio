import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './components/homepage'
import LoginPage from './components/login'
import BlogPage from './components/blogs'
import PostBlog from './components/blogdesc'

const App = () => (
  <Router>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/blogs" exact component={BlogPage} />
    <Route path="/blogdesc" component={PostBlog} />
  </Router>
)

export default App;