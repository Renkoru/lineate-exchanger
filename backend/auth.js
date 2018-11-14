import { OAuth2Strategy } from 'passport-google-oauth';

export default (passport, dbUser) => {
    passport.serializeUser((user, done) => { done(null, user.id); });

    passport.deserializeUser((id, done) => {
        return dbUser
            .findOne({ where: { id } })
            .then((user) => { done(null, user); })
            .catch((err) => { done(err,null); });
    });

    // passport.serializeUser(function(user, cb) {
    //     cb(null, user);
    // });

    // passport.deserializeUser(function(obj, cb) {
    //     cb(null, obj);
    // });

    passport.use(new OAuth2Strategy(
        {
            clientID: "1083531367303-veqe0a82b1sqjgoatp2dtvalrl6oeao5.apps.googleusercontent.com",
            clientSecret: 'V1q3JkIDonGpzhvxUZOd77h4',
            callbackURL: process.env.GOOGLE_AUTH_CALLBACK
        },
        function(accessToken, refreshToken, profile, done) {
            console.log('Add profile', profile);

            dbUser
                .findOrCreate({
                    where: { googleId: profile.id },
                    defaults: {
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        imageUrl: profile.photos[0].value,
                    }
                })
                .spread((user, created) => {
                    console.log(user.get({
                        plain: true
                    }));
                    console.log(created);
                    return done(null, user);
                });
        }
    ));
};


// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
