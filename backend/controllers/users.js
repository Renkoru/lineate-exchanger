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
        ctx.body = {
            users
        };
    },
    create: async (ctx) => {
        console.log(`Create user: ${ctx.request.body.email}`);

        const newUser = await ctx.db.models.User.create(ctx.request.body);

        ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
    },
};
