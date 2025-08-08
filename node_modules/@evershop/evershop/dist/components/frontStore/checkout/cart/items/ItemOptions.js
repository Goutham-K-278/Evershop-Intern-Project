import { useAppState } from '@components/common/context/app';
import PropTypes from 'prop-types';
import React from 'react';
import { get } from '../../../../../lib/util/get.js';
export function ItemOptions({ options = [] }) {
    if (options.length === 0) {
        return null;
    }
    const currency = get(useAppState(), 'currency', 'USD');
    const language = get(useAppState(), 'language', 'en');
    return (React.createElement("div", { className: "cart-item-options mt-2" },
        React.createElement("ul", { className: "list-basic" }, options.map((o, i) => (React.createElement("li", { key: i },
            React.createElement("span", { className: "option-name" },
                o.option_name,
                ": "),
            o.values.map((v, k) => {
                const formatedExtraPrice = new Intl.NumberFormat(language, {
                    style: 'currency',
                    currency
                }).format(v.extra_price);
                return (React.createElement("span", { key: k },
                    v.value_text,
                    React.createElement("span", { className: "extra-price" },
                        "(",
                        formatedExtraPrice,
                        ")"),
                    ' '));
            })))))));
}
ItemOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        option_name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.shape({
            extra_price: PropTypes.number,
            value_text: PropTypes.string
        }))
    }))
};
ItemOptions.defaultProps = {
    options: []
};
//# sourceMappingURL=ItemOptions.js.map