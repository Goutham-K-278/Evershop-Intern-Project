/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import React from 'react';
import { get } from '../../../../lib/util/get.js';
export default function ActionColumnRow({ areaProps: { row } }) {
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("a", { href: get(row, 'editUrl', '#') },
                React.createElement("i", { className: "fas fa-edit" }))),
        React.createElement("div", null, get(row, 'deleteUrl') && (React.createElement("span", { className: "text-danger link", onClick: () => {
                if (window.confirm('Are you sure?'))
                    window.location.href = get(row, 'deleteUrl');
            } },
            React.createElement("i", { className: "fas fa-trash-alt" }))))));
}
ActionColumnRow.propTypes = {
    areaProps: PropTypes.shape({
        row: PropTypes.shape({
            editUrl: PropTypes.string,
            deleteUrl: PropTypes.string
        })
    }).isRequired
};
//# sourceMappingURL=ActionRow.js.map