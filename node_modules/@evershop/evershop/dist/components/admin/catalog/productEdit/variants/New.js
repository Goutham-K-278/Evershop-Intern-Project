import { CreateVariantGroup } from '@components/admin/catalog/productEdit/variants/CreateVariantGroup';
import { Card } from '@components/admin/cms/Card';
import PropTypes from 'prop-types';
import React from 'react';
export function New({ createVariantGroupApi, setGroup }) {
    const [action, setAction] = React.useState(undefined);
    return (React.createElement(React.Fragment, null,
        React.createElement(Card.Session, null,
            action === undefined && (React.createElement("div", null,
                React.createElement("div", { className: "justify-center text-center" },
                    React.createElement("div", { className: "mb-16" },
                        React.createElement("span", { className: "pr-4" }, "This product has some variants like color or size?"),
                        React.createElement("a", { className: "text-interactive hover:underline", href: "#", onClick: (e) => {
                                e.preventDefault();
                                setAction('create');
                            } }, "Create a variant group"))))),
            action === 'create' && (React.createElement("div", null,
                React.createElement(CreateVariantGroup, { setGroup: setGroup, createVariantGroupApi: createVariantGroupApi })))),
        action === 'create' && (React.createElement(Card.Session, null,
            React.createElement("a", { className: "text-critical hover:underline", href: "#", onClick: (e) => {
                    e.preventDefault();
                    setAction(undefined);
                } }, "Cancel")))));
}
New.propTypes = {
    createVariantGroupApi: PropTypes.string.isRequired,
    setGroup: PropTypes.func.isRequired
};
//# sourceMappingURL=New.js.map