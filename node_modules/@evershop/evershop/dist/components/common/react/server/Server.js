import Area from '@components/common/Area';
import { Alert } from '@components/common/modal/Alert';
import PropTypes from 'prop-types';
import React from 'react';
function ServerHtml({ css, js, appContext }) {
    return (React.createElement(React.Fragment, null,
        React.createElement("head", null,
            React.createElement("meta", { charset: "utf-8" }),
            React.createElement("script", { dangerouslySetInnerHTML: { __html: appContext } }),
            css.map((src, index) => (React.createElement("link", { href: src, rel: "stylesheet", key: index }))),
            React.createElement(Area, { noOuter: true, id: "head" })),
        React.createElement("body", { id: "body" },
            React.createElement("div", { id: "app", className: "bg-background" },
                React.createElement(Alert, null,
                    React.createElement(Area, { id: "body", className: "wrapper" }))),
            js.map((src, index) => (React.createElement("script", { src: src, key: index }))))));
}
ServerHtml.propTypes = {
    css: PropTypes.arrayOf(PropTypes.string).isRequired,
    js: PropTypes.arrayOf(PropTypes.string).isRequired,
    appContext: PropTypes.string.isRequired
};
export default ServerHtml;
//# sourceMappingURL=Server.js.map