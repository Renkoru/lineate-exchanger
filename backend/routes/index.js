import passport from 'koa-passport';
const Router = require('koa-router');

const users = require('./users');


const mainRouter = new Router();
const apiRouter = new Router();


apiRouter.use('/users', users.routes(), users.allowedMethods());

mainRouter
    .use('/api/v1', apiRouter.routes())
    .get('/auth/logout', ctx => ctx.logout())
    .get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))
    .get('/auth/google/callback',
         passport.authenticate('google', { failureRedirect: '/NOACC' }),
         function(ctx, res) {
             console.log('\n>>>>>> req, res');
             console.log(ctx);
             console.log('<<<<<< end block req, res');
             ctx.redirect('/');
         }
        );


module.exports = mainRouter;
