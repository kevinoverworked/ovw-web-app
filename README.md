# Server information #

`./server.js` handles the http request. Funnels it to localhost:5000
Starting the node server, type command in terminal `node server`

`/routes/routes.js` pulls in `/controllers/controllers.js`. 
Routes handles page request and calls for a module

`/controllers/controllers.js` creates a response object API. 
I think this is where I'd do my database-to-API set ups for front end and backend

# React App #
`/client/src/App.js`
Mounts the api from controllers.js and returns an HTML structure. HTML structure is a combination of hand written HTML and HTML created on the fly from the controller API.
React app funnels to localhost:3000. I created a proxy in `./package.json` that funnels unknown page request to the server in development mode.
Starting readct app: `npm run client`
Creating a build: `npm run client:build` - the build is like the compiled "finished" version of the code. Ready for deployment. The build files are located in `./client/build`


# React and Node #
To start both the server and the React app: `npm run dev`


# Master Branch #
If not creating branches and you're working directly on master.
`git add -A` stages all the changes.
`git commit -m "message"` pretty standard
`git push` since there's no branch or anything, straight git push will push the master.
