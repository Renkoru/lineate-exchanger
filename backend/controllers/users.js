module.exports = {
    me: async (ctx, next) => {
        if (!ctx.req.user) {
            ctx.status = 404;
            next();
            return;
        }

        const {
            id,
            name,
            email,
            imageUrl,
        } = ctx.req.user;

        ctx.body = {
            id,
            name,
            email,
            imageUrl,
        };
    },
    getAll: async (ctx) => {
        const users = await ctx.db.models.User.findAll();
        ctx.body = users.map(({
            id,
            name,
            email,
            imageUrl,
        }) => ({
            id,
            name,
            email,
            imageUrl,
        }));
    },
    create: async (ctx) => {
        console.log(`Create user: ${ctx.request.body.email}`);

        const newUser = await ctx.db.models.User.create(ctx.request.body);

        ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
    },
    allItems: async (ctx) => {
        const users = await ctx.db.models.UserCollectionItem.findAll();
        ctx.body = users.map(({
            id,
            userEmail,
            collectionItemId,
        }) => ({
            id,
            userEmail,
            collectionItemId,
        }));
    },
    addItem: async (ctx, next) => {
        console.log('Create item');

        if (!ctx.req.user) {
            ctx.status = 404;
            next();
            return;
        }

        const newUserItem = await ctx.db.models.UserCollectionItem.create({
            userEmail: ctx.req.user.email,
            collectionItemId: ctx.request.body.itemId,
        });

        ctx.status = 201;

    },
    removeItem: async (ctx, next) => {
        console.log('Remove item');

        if (!ctx.req.user) {
            ctx.status = 404;
            next();
            return;
        }

        const itemId = ctx.params.id;
        const userEmail = ctx.req.user.email;
        const itemToDelte  = await ctx.db.models.UserCollectionItem.findByPk(itemId);

        if (itemToDelte.userEmail !== userEmail) {
            ctx.status = 404;
            next();
            return;
        }

        await itemToDelte.destroy();
        ctx.status = 201;
    },
};
