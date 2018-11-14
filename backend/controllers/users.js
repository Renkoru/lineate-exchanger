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
        }) => {
            return {
                id,
                name,
                email,
                imageUrl,
            };
        });
    },
    create: async (ctx) => {
        console.log(`Create user: ${ctx.request.body.email}`);

        const newUser = await ctx.db.models.User.create(ctx.request.body);

        ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
    },
    allItems: async (ctx) => {
        const usersCollectionItems = await ctx.db.models.UserCollectionItem.findAll();
        const collectionItems = await ctx.db.models.CollectionItem.findAll();

        ctx.body = usersCollectionItems.map(({
            id,
            userId,
            collectionItemId,
        }) => {
            const item = collectionItems.filter(({ id }) => (id === collectionItemId))[0];

            return {
                id,
                userId,
                item,
            };
        });
    },
    addItem: async (ctx, next) => {
        console.log('Create item');

        if (!ctx.req.user) {
            ctx.status = 404;
            next();
            return;
        }

        const newUserItem = await ctx.db.models.UserCollectionItem.create({
            userId: ctx.req.user.id,
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
        const userId = ctx.req.user.id;
        const itemToDelte  = await ctx.db.models.UserCollectionItem.findByPk(itemId);

        if (itemToDelte.userId !== userId) {
            ctx.status = 404;
            next();
            return;
        }

        await itemToDelte.destroy();
        ctx.status = 201;
    },
};
