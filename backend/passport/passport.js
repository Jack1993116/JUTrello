const passport    = require('passport');
const passportJWT = require("passport-jwt");
const Users = require('../models/users');
const ExtractJWT = passportJWT.ExtractJwt;

const JWTStrategy   = passportJWT.Strategy;



passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'secret'
    },
    function (jwtPayload, done) {

        console.log('in jwt passport')
        console.log(jwtPayload.id)
        //find the user in db if needed
        Users.find({_id:jwtPayload.id})
        .then(user => {
            console.log(user);
            if (user) {
                return done(null,user)
            }else{
                return done(null,false)
            }
            
        })
        .catch(err=>console.log(err));
    }
));