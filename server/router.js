const express = require('express')
const { json } = require('express')
const rtr = express.Router()
const User = require('./middleware/auth')

const user = new User()
let loggedin = false;

rtr.get('/', (req, res) => {
    res.send('sever is running.')
})

rtr.get('/login', function (req, res, next) {
    console.log(req.query)
    user.find(result => {
        if (result.length) {
            res.redirect('/blogs')
        }
        else {
            res.redirect('/')
        }
    })
});

var blogdata = [
    { _id: 1, title: 'This is Title A', desc: 'asdfjsld', TC: 0 },
    { _id: 2, title: 'This is Title B', desc: 'asdfjsld', TC: 0 },
    { _id: 3, title: 'This is Title C', desc: 'asdfjsld', TC: 0 },
    { _id: 4, title: 'This is Title D', desc: 'asdfjsld', TC: 0 },
    { _id: 5, title: 'This is Title E', desc: 'asdfjsld', TC: 0 }
]

rtr.get('/blogs', (req, res) => {
    console.log('get blogs')
    res.json(blogdata)
})
rtr.get('/blogdesc', (req, res) => {
    var blogid = Number(req.query.id)
    console.log('blogPost id: ' + blogid)
    var now = blogdata[blogid - 1].TC;
    blogdata[blogid - 1].TC = now + 1;
    res.json(blogdata[blogid - 1])
})

module.exports = rtr