const Router = require('koa-router');

const { Users } = require('../controllers');


const router = new Router();


router
    .get('/me', Users.me)
    .get('/', Users.getAll)
    .post('/', Users.create);


module.exports = router;
