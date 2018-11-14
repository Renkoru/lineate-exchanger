module.exports = {
    getAllItems: async (ctx) => {
        const harryCollection = await ctx.db.models.Collection.findOne({
            where: {
                name: 'Lenta Harry Potter 2018',
            }
        });

        const items = await ctx.db.models.CollectionItem.findAll({
            where: {
                collectionId: harryCollection.id,
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
