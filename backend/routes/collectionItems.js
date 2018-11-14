import Router from 'koa-router';

import { collectionItems } from '../controllers';


const router = new Router();


router
    .get('/items', collectionItems.getAllItems);


export default router;
