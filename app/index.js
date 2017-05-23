const express = require( "express" );
// const path = require( "path" );
const bodyParser = require( "body-parser" );

const app = express();
const routes = require( "./config/routes" );

app.set( "views", "./doc/views" );
app.set( "view engine", "ejs" );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( express.static( "./doc" ) );
app.use( "/", routes );

app.listen( 3000, () => {
    console.log( "Server Online" );
} );
