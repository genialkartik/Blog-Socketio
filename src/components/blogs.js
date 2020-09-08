import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

// feedback form
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    minWidth: 400,
    margin: 20,
    background: '#929292',
    color: '#fff',
    float: 'left',
    borderRadius: '15px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: 'red',
  }
}))

const BlogPage = () => {

  const [blogdata, setBlogdata] = useState([])
  const [flag, setFlag] = useState(true)
  const [loggedin, setLogin] = useState(true)

  useEffect(() => {
    if (flag === true) {
      axios.get('/blogs')
        .then(res => {
          if (typeof (res.data) === 'object') {
            setFlag(false)
            setBlogdata(res.data)
          } else {
            setFlag(false)
            setLogin(false)
          }
        })
    }
  })

  const classes = useStyles()
  console.log(blogdata)
  return (
    <div>
      {
        (loggedin === true) ?
          <div>{
            blogdata.map(({ _id, title, desc, TC }) => (
              <div key={_id}>
                <Link to={`/blogdesc?id=${_id}`}>
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.media}
                      image={'https://livewallpaperhd.com/wp-content/uploads/2017/07/Coffee-Wallpapers-For-Desktop.jpg'}
                      title="Thank Buddy"
                    />
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>K</Avatar>
                      }
                      title={title}
                      // subheader={month[Number(date.substring(5, 7)) - 1] + ' ' + date.substring(8, 10) + " " + date.substring(0, 4)}
                      subheader="Aug 11 2020"
                    />
                  </Card>
                </Link>
              </div>
            ))
          }</div> :
          <div>
            <div><p>You're not logged In. Kindly, login first.</p></div>
            <Link to={`/login`}>
              <Button
                style={{ backgroundColor: 'blue' }}
              >Login</Button>
            </Link>
          </div>
      }
    </div>
  )
}


export default BlogPage