# Blog-Socketio
Blog Post using Socket.io

Run on Online IDE: [GitPod](https://gitpod.io/start/#bd8ae49e-acfc-4843-a602-d2df1fe1502c)

Working Prototype (Demo): [kartikpratilipi.com](https://kartikpratilipi.herokuapp.com/) 

## Stack Used:

- NodeJS for Backend
- ExpressJS framework
- ReactJS for Frontend
- Socket.io for realtime data (for Current Viewer's Count)

## Concept Working in Behind:

I've used Socket.io to count number of current viewers and mapped every unique socket id (current viewer id) to blog id (id of currently viewing blog) in 'map' variable of type Map and every blog id have it's frequency (number current viewers of that particular blog) mapped in 'map2' variable of type Map.

## Note:

- This repo is a demonstration of task given by company [Pratilipi](https://pratilipi.com/) as well as an experiment in Cloud Deployment + WebSockets (using socket.io). 
- I didn't used any database to keep it simple and easy to understand. Authentication and validation is processing locally.
