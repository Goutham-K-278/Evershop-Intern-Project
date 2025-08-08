import { Card } from '@components/admin/cms/Card';
import PropTypes from 'prop-types';
import React from 'react';
import './Bestsellers.scss';
export default function BestSellers({ bestSellers, listUrl }) {
    return (React.createElement(Card, { title: "Best Sellers", actions: [
            {
                name: 'All products',
                onAction: () => {
                    window.location.href = listUrl;
                }
            }
        ] },
        React.createElement(Card.Session, null,
            React.createElement("table", { className: "listing bestsellers" },
                React.createElement("tbody", null,
                    bestSellers.length === 0 && (React.createElement("tr", null,
                        React.createElement("td", { align: "left" }, "Look like you just started. No bestsellers yet."),
                        React.createElement("td", null, " "))),
                    bestSellers.map((p, i) => {
                        var _a, _b, _c;
                        return (React.createElement("tr", { key: i },
                            React.createElement("td", null,
                                React.createElement("div", { className: " flex justify-left" },
                                    React.createElement("div", { className: "flex justify-start gap-4 items-center" },
                                        React.createElement("div", { className: "grid-thumbnail text-border border border-divider p-3 rounded", style: { width: '6rem' } },
                                            ((_a = p.image) === null || _a === void 0 ? void 0 : _a.thumb) && (React.createElement("img", { className: "object-cover", src: (_b = p.image) === null || _b === void 0 ? void 0 : _b.thumb, alt: "" })),
                                            !((_c = p.image) === null || _c === void 0 ? void 0 : _c.thumb) && (React.createElement("svg", { className: "self-center", xmlns: "http://www.w3.org/2000/svg", width: "2rem", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" })))),
                                        React.createElement("div", null,
                                            React.createElement("a", { href: p.editUrl || '', className: "font-semibold hover:underline" }, p.name))))),
                            React.createElement("td", null),
                            React.createElement("td", null, p.price.regular.text),
                            React.createElement("td", null,
                                p.soldQty,
                                " sold")));
                    }))))));
}
BestSellers.propTypes = {
    bestSellers: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.shape({
            regular: PropTypes.shape({
                value: PropTypes.number,
                text: PropTypes.string
            })
        }),
        soldQty: PropTypes.number,
        image: PropTypes.shape({
            thumb: PropTypes.string
        }),
        editUrl: PropTypes.string
    })).isRequired,
    listUrl: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'leftSide',
    sortOrder: 20
};
export const query = `
  query Query {
    bestSellers {
      name
      price {
        regular {
          value
          text
        }
      }
      soldQty
      image {
        thumb
      }
      editUrl
    }
    listUrl: url(routeId: "productGrid")
  }
`;
//# sourceMappingURL=Bestsellers.js.map