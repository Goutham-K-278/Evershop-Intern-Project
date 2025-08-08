import { Card } from '@components/admin/cms/Card';
import CollectionIcon from '@heroicons/react/solid/esm/TagIcon';
import PropTypes from 'prop-types';
import React from 'react';
export default function Collections({ product: { collections } }) {
    return (React.createElement(Card, { title: "Collections", subdued: true },
        React.createElement(Card.Session, null,
            collections.map((collection) => (React.createElement("div", { className: "flex justify-start gap-4 items-center align-middle", key: collection.uuid },
                React.createElement(CollectionIcon, { width: 16, height: 16, fill: "#2c6ecb" }),
                React.createElement("a", { href: collection.editUrl, className: "hover:underline" },
                    React.createElement("span", null, collection.name))))),
            collections.length === 0 && (React.createElement("div", { className: "text-gray-500" }, "No collections")))));
}
Collections.propTypes = {
    product: PropTypes.shape({
        collections: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            editUrl: PropTypes.string.isRequired,
            uuid: PropTypes.string.isRequired
        }))
    })
};
Collections.defaultProps = {
    product: {
        collections: []
    }
};
export const layout = {
    areaId: 'rightSide',
    sortOrder: 15
};
export const query = `
  query Query {
    product(id: getContextValue("productId", null)) {
      collections {
        uuid
        name
        editUrl
      }
    }
  }
`;
//# sourceMappingURL=Collection.js.map