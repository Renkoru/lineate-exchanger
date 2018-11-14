import Router from 'koa-router';

import { users } from '../controllers';


const router = new Router();


router
    .get('/me', users.me)
    .get('/items', users.allItems)
    .post('/items', users.addItem)
    .del('/items/:id', users.removeItem)
    .get('/', users.getAll)
    .post('/', users.create);


export default router;
