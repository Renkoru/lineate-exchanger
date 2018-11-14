const Router = require('koa-router');

const { Users } = require('../controllers');


const router = new Router();


router
    .get('/me', Users.me)
    .get('/items', Users.allItems)
    .post('/items', Users.addItem)
    .del('/items/:id', Users.removeItem)
    .get('/', Users.getAll)
    .post('/', Users.create);


module.exports = router;
