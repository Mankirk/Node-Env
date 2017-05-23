const express = require( "express" );
const controllers = require( "../controllers/first" );

const router = express.Router();

router.get( "/", ( req, res ) => {
    res.render( "main", { title: "random title" } );
} );

router.get( "/second", controllers.main );

module.exports = router;
