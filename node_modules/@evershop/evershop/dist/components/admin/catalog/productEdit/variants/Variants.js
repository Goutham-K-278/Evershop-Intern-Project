import { CreateVariant } from '@components/admin/catalog/productEdit/variants/CreateVariant';
import { Variant } from '@components/admin/catalog/productEdit/variants/Variant';
import { Card } from '@components/admin/cms/Card';
import Spinner from '@components/common/Spinner';
import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from 'urql';
export const VariantQuery = `
query Query($productId: ID!) {
  product(id: $productId) {
    variantGroup {
      items {
        id
        attributes {
          attributeId
          attributeCode
          optionId
          optionText
        }
        product {
          productId
          uuid
          name
          sku
          status
          visibility
          price {
            regular {
              value
              currency
              text
            }
          }
          inventory {
            qty
            isInStock
            stockAvailability
            manageStock
          }
          editUrl
          updateApi
          image {
            uuid
            url
          }
          gallery {
            uuid
            url
          }
        }
      }
    }
  }
}
`;
export function Variants({ productId, productUuid, variantGroup, variantAttributes, createProductApi, addVariantItemApi, productImageUploadUrl }) {
    var _a;
    const [result, reexecuteQuery] = useQuery({
        query: VariantQuery,
        variables: {
            productId
        }
    });
    const refresh = () => {
        reexecuteQuery({ requestPolicy: 'network-only' });
    };
    const { data, fetching, error } = result;
    if (fetching) {
        return (React.createElement("div", { className: "p-3 flex justify-center items-center border rounded border-divider" },
            React.createElement(Spinner, { width: 30, height: 30 })));
    }
    if (error) {
        return (React.createElement("p", null,
            "Oh no...",
            error.message));
    }
    return (React.createElement(Card.Session, null,
        React.createElement("div", { className: "variant-list" },
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Image"),
                        variantAttributes.map((attribute) => (React.createElement("th", { key: attribute.attributeId }, attribute.attributeName))),
                        React.createElement("th", null, "SKU"),
                        React.createElement("th", null, "Price"),
                        React.createElement("th", null, "Stock"),
                        React.createElement("th", null, "Status"),
                        React.createElement("th", null, "Actions"))),
                React.createElement("tbody", null, (((_a = data.product.variantGroup) === null || _a === void 0 ? void 0 : _a.items) || [])
                    .filter((v) => v.product.productId !== productId)
                    .map((v) => (React.createElement(Variant, { key: v.id, variant: v, attributes: variantAttributes, productImageUploadUrl: productImageUploadUrl, refresh: refresh, variantGroup: variantGroup })))))),
        React.createElement("div", { className: "self-center" },
            React.createElement(CreateVariant, { productId: productUuid, variantGroup: variantGroup, createProductApi: createProductApi, addVariantItemApi: addVariantItemApi, productImageUploadUrl: productImageUploadUrl, refresh: refresh }))));
}
Variants.propTypes = {
    variantAttributes: PropTypes.arrayOf(PropTypes.shape({
        attributeName: PropTypes.string,
        attributeId: PropTypes.number.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            optionId: PropTypes.number,
            optionText: PropTypes.string
        }))
    })).isRequired,
    productId: PropTypes.number.isRequired,
    productUuid: PropTypes.string.isRequired,
    variantGroup: PropTypes.shape({
        attributes: PropTypes.arrayOf(PropTypes.shape({
            attributeName: PropTypes.string,
            attributeId: PropTypes.number.isRequired,
            attributeCode: PropTypes.string.isRequired,
            attributeValues: PropTypes.arrayOf(PropTypes.shape({
                attributeValueId: PropTypes.string.isRequired,
                attributeValueName: PropTypes.string.isRequired
            }))
        }))
    }),
    createProductApi: PropTypes.string.isRequired,
    addVariantItemApi: PropTypes.string.isRequired,
    productImageUploadUrl: PropTypes.string.isRequired
};
Variants.defaultProps = {
    variantGroup: null
};
//# sourceMappingURL=Variants.js.map