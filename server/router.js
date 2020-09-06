const express = require('express')
const rtr = express.Router()
const User = require('./middleware/auth')

const user = new User()
let logStatus = false;

rtr.get('/', (req, res) => {
    res.send('sever is running.  If It doesnt work look here for alternative: Github: https://github.com/genialkartik/Blog-Socketio  GitPod (IDE): https://gitpod.io/start/#bd8ae49e-acfc-4843-a602-d2df1fe1502c')
})

rtr.get('/login', (req, res) => {
    res.json({logdin: false})
})

rtr.get('/signin', function (req, res, next) {
    var r = req.query;
    var username = r.email;
    var password = r.pwd;
    var temp = {
        uname: username,
        pwd: password
    }
    user.login(temp, result => {
        if (result == 1) {
            logStatus = true;
            res.json({ logdin: true })
        }
        else {
            res.json({ logdin: false })
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
    if(logStatus == true){
        res.json(blogdata)
    }else{
        res.json(logStatus)
    }
})
rtr.get('/blogdesc', (req, res) => {
    var blogid = Number(req.query.id)
    console.log('blogPost id: ' + blogid)
    var now = blogdata[blogid - 1].TC;
    blogdata[blogid - 1].TC = now + 1;
    res.json(blogdata[blogid - 1])
})

module.exports = rtr