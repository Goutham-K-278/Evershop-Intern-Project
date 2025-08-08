import PropTypes from 'prop-types';
import React from 'react';
import '@components/frontStore/catalog/product/list/item/Thumbnail.scss';
import ProductNoThumbnail from '@components/common/ProductNoThumbnail';
function Thumbnail({ url, imageUrl, alt }) {
    return (React.createElement("div", { className: "product-thumbnail-listing" },
        imageUrl && (React.createElement("a", { href: url },
            React.createElement("img", { src: imageUrl, alt: alt }))),
        !imageUrl && (React.createElement("a", { href: url },
            React.createElement(ProductNoThumbnail, { width: 100, height: 100 })))));
}
Thumbnail.propTypes = {
    alt: PropTypes.string,
    imageUrl: PropTypes.string,
    url: PropTypes.string
};
Thumbnail.defaultProps = {
    alt: '',
    imageUrl: '',
    url: ''
};
export { Thumbnail };
//# sourceMappingURL=Thumbnail.js.map