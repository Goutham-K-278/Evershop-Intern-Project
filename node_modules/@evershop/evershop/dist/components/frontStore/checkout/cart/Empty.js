import { useAppState } from '@components/common/context/app';
import Button from '@components/common/form/Button';
import React from 'react';
import { _ } from '../../../../lib/locale/translate/_.js';
import { get } from '../../../../lib/util/get.js';
export function Empty() {
    const items = get(useAppState(), 'cart.items', []);
    if (items.length > 0) {
        return null;
    }
    return (React.createElement("div", { className: "empty-shopping-cart w-100", style: { marginTop: '150px' } },
        React.createElement("div", null,
            React.createElement("div", { className: "text-center" },
                React.createElement("h2", null, _('Shopping cart'))),
            React.createElement("div", { className: "mt-8 text-center" },
                React.createElement("span", null, _('Your cart is empty!'))),
            React.createElement("div", { className: "flex justify-center mt-8" },
                React.createElement(Button, { url: "/", title: React.createElement("span", { className: "flex space-x-4" },
                        React.createElement("span", { className: "self-center" }, _('CONTINUE SHOPPING')),
                        ' ',
                        React.createElement("svg", { className: "self-center", style: { width: '2.5rem', height: '2.5rem' }, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1, d: "M17 8l4 4m0 0l-4 4m4-4H3" }))) })))));
}
//# sourceMappingURL=Empty.js.map