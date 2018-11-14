import passport from 'koa-passport';
import Router from 'koa-router';

import users from './users';
import collectionItems from './collectionItems';


const mainRouter = new Router();
const apiRouter = new Router();


apiRouter.use('/users', users.routes(), users.allowedMethods());
apiRouter.use('/collections/2', collectionItems.routes(), collectionItems.allowedMethods());

mainRouter
    .use('/api/v1', apiRouter.routes())
    .get('/auth/logout', (ctx) => {
        ctx.logout();
        ctx.redirect('/');
    })
    .get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
    .get('/auth/google/callback',
         passport.authenticate('google', { failureRedirect: '/NOACC' }),
         function(ctx, res) {
             console.log('\n>>>>>> req, res');
             console.log(ctx);
             console.log('<<<<<< end block req, res');
             ctx.redirect('/');
         }
        );


export default mainRouter;
