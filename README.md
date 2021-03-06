Chatty
=====================

A realtime chat application built using websockets

## Screenshots

![A single user joins the room](https://raw.githubusercontent.com/Anarchonist7/chatty/master/docs/Screen%20Shot%202018-11-30%20at%207.02.39%20PM.png)

![Multiple users showcase some of the app's cool features](https://raw.githubusercontent.com/Anarchonist7/chatty/master/docs/Screen%20Shot%202018-11-30%20at%207.00.29%20PM.png)
### Usage

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

Using a new tab in terminal, cd into chatty_server and run the command
```
node server.js
```
This will start the websocket server, which must also be running for the app to work.

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

### Cool Features

* Upon joining the room, users are assigned one of four colours, one of which has a cool rainbow like effect
* Start your messages with /me to speak in italics
* Paste an image url to display it to everyone in the chat
