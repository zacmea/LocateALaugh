
/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path')
const express = require('express')
// const livereload = require("livereload");
// const connectLiveReload = require("connect-livereload");
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3000

/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models/database');

const artistController = require('./controllers/artistController')
const eventController = require('./controllers/eventController')
const userController = require('./controllers/userController')

/* Create the Express app
--------------------------------------------------------------- */
const app = express();
/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
// const liveReloadServer = livereload.createServer();

// liveReloadServer.server.once("connection", () => {
//     setTimeout(() => {
//         liveReloadServer.refresh("/");
//     }, 100);
// });

/* Middleware (app.use)
--------------------------------------------------------------- */

app.use(cors())
app.use(express.static('public'))
// app.use(connectLiveReload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('tiny')) 

app.get('/', function (req, res) {
  res.send("This is the homepage")
});

app.get('/seed', function (req, res) {
    db.User.deleteMany({})
        .then(removedUser => {
            console.log(`Removed ${removedUser.length} users`)

            db.User.insertMany(db.seedData)
                .then(addedUser => {
                    console.log(`Added ${addedUser.length} users`)
                    res.json(addedUser)
                })
        })
});
// render the about us page
app.get('/about', function (req, res) {
    res.render('about')
});

// This tells our app to look at the `controllers/fruits.js` file 
// to handle all routes that begin with `localhost:3000/fruits`
app.use('/artists', artistController)
app.use('/events', eventController)
app.use('/user', userController)

// The "catch-all" route: Runs for any other URL that doesn't match the above routes
app.get('*', function (req, res) {
    res.render('404')
});

// app.listen lets our app know which port to run
app.listen(PORT, () => {
    console.log('Their power level is over', PORT)
})