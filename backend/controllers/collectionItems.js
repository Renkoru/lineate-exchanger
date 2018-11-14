module.exports = {
    getAllItems: async (ctx) => {
        const items = await ctx.db.models.CollectionItem.findAll({
            where: {
                collectionId: 2,
            }
        });
        ctx.body = items.map(({
            id,
            name,
            description,
            imageUrl,
            collectionId,
        }) => ({
            id,
            name,
            description,
            imageUrl,
            collectionId,
        }));
    },
};
