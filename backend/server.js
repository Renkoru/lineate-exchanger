import path from 'path';

import 'dotenv/config';
import koaBody from 'koa-body';
import serve from 'koa-static';
import session from 'koa-session';
import passport from 'koa-passport';
// import { OAuth2Strategy } from 'passport-google-oauth';
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

import app from './app';
import db from './databases/postgres-db';
import auth from './auth';
import router from './routes';


const port = process.env.PORT || 3000;
const staticDir = path.join(__dirname, '..', 'frontend', 'dist');


const bootstrap = async () => {
    // Initialize the database
    await db.initDB();
    app.context.db = db;

    // session key
    app.keys = ['your-session-secret'];

    auth(passport, db.models.User);

    // router.get('/auth/google',
    //            passport.authenticate('google', { scope: ['profile'] }));

    // router.get('/auth/google/callback',
    //            passport.authenticate('google', { failureRedirect: '/NOACC' }),
    //            function(req, res) {
    //                console.log('\n>>>>>> req, res');
    //                console.log(req);
    //                console.log(res);
    //                console.log('<<<<<< end block req, res');
    //                res.redirect('/');
    //            }
    //           );

    app
        .use(session({}, app))
        .use(koaBody())
        .use(passport.initialize())
        .use(passport.session())
        .use(serve(staticDir))
        .use(router.routes());


    app.listen(port);
};

bootstrap();
