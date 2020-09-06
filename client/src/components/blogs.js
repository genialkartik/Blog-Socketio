import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

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

  useEffect(() => {
    if (flag === true) {
      axios.get('/blogs')
        .then(res => {
          setFlag(false)
          setBlogdata(res.data)
        })
    }
  })

  const classes = useStyles()
  console.log(blogdata)
  return (
    <div>
      {
        blogdata.map(({ _id, title, desc, TC}) => (
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
      }
    </div>
  )
}


export default BlogPage