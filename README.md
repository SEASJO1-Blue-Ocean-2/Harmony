# Harmony
**Connect From Anywhere** <br />
Harmony is a mobile-first group chat app that lets you and your friends stay connected.

## Features
* Real-time text, voice, and video chat
* Public, private, and friend-only rooms
* Support for multi-media embedded uploads
* Authentication via email or Google account

## The Team
Alex Tarnawski, Full-Stack Engineer
Alex Ting, Project Manager
Jacob Siegelman, Architect
Julian Thong, Back-End Engineer
Kathy Jin, Back-end Engineer
Simon Lu, UI Design
Spencer Asavadejkajorn, Front-end Engineer

## Technology
Harmony was written in Javascript with a React front-end. The backend uses Firebase Realtime Database for low latency and high reliability. Firebase also handles Authentication and file uploads. Video and audio chat is done peer-to-peer using Socket.io and Peer.js.


## Getting a Copy of the Repo
If you haven't already, fork the repository on GitHub and clone your newly created repo down to your computer.
This project runs on Firebase. Before starting the project, create a Firebase App and add the project information to config.js.

## How to Run
Navigate to the root directory of Blue Ocean, then install the required packages by running `npm install` in your terminal. To begin, first compile the by running `npm run react-dev`, then start the server by running `npm start`. After that, run `npm start-peer`. Lastly, navigate to `http://localhost:3000` in your browser.

