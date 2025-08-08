import ProductList from '@components/frontStore/catalog/product/list/List.jsx';
import PropTypes from 'prop-types';
import React from 'react';
export default function CollectionProducts({ collection }) {
    var _a;
    if (!collection) {
        return null;
    }
    return (React.createElement("div", { className: "pt-12" },
        React.createElement("div", { className: "page-width" },
            React.createElement("h3", { className: "mt-12 mb-12 text-center uppercase h5 tracking-widest" }, collection === null || collection === void 0 ? void 0 : collection.name),
            React.createElement(ProductList, { products: (_a = collection === null || collection === void 0 ? void 0 : collection.products) === null || _a === void 0 ? void 0 : _a.items, countPerRow: 4 }))));
}
CollectionProducts.propTypes = {
    collection: PropTypes.shape({
        collectionId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        products: PropTypes.shape({
            items: PropTypes.arrayOf(PropTypes.shape({
                productId: PropTypes.number.isRequired,
                sku: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.shape({
                    regular: PropTypes.shape({
                        value: PropTypes.number.isRequired,
                        text: PropTypes.string.isRequired
                    }).isRequired,
                    special: PropTypes.shape({
                        value: PropTypes.number.isRequired,
                        text: PropTypes.string.isRequired
                    }).isRequired
                }).isRequired,
                image: PropTypes.shape({
                    alt: PropTypes.string.isRequired,
                    url: PropTypes.string.isRequired
                }),
                url: PropTypes.string.isRequired
            })).isRequired
        }).isRequired
    }).isRequired
};
export const query = `
  query Query($collection: String, $count: ID) {
    collection (code: $collection) {
      collectionId
      name
      products (filters: [{key: "limit", operation: eq, value: $count}]) {
        items {
          ...Product
        }
      }
    }
  }
`;
export const fragments = `
  fragment Product on Product {
    productId
    name
    sku
    price {
      regular {
        value
        text
      }
      special {
        value
        text
      }
    }
    image {
      alt
      url: listing
    }
    url
  }
`;
export const variables = `{
  collection: getWidgetSetting("collection"),
  count: getWidgetSetting("count")
}`;
//# sourceMappingURL=CollectionProducts.js.map