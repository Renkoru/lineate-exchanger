import Router from 'koa-router';

import { CollectionItems } from '../controllers';


const router = new Router();


router
    .get('/items', CollectionItems.getAllItems);


module.exports = router;
