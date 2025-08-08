export default {
    Query: {
        collectionProductsWidget: async (root, { collection, count }) => ({
            collection,
            count: count ? parseInt(count, 10) : 5
        })
    }
};
//# sourceMappingURL=CollectionProductsWidget.resolvers.js.map