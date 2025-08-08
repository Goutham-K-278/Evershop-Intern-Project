import Area from '@components/common/Area';
import { AppProvider } from '@components/common/context/app';
import { Alert } from '@components/common/modal/Alert';
import Head from '@components/common/react/Head';
import PropTypes from 'prop-types';
import React from 'react';
import { createClient, Provider } from 'urql';
const client = createClient({
    url: '/api/graphql'
});
export function App({ children }) {
    return (React.createElement(AppProvider, { value: window.eContext },
        React.createElement(Provider, { value: client },
            React.createElement(Alert, null,
                React.createElement(Head, null),
                React.createElement(Area, { id: "body", className: "wrapper" }))),
        children));
}
App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
//# sourceMappingURL=Client.js.map