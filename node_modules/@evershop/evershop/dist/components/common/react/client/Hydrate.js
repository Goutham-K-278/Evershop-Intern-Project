import Area from '@components/common/Area';
import { AppProvider } from '@components/common/context/app';
import { Alert } from '@components/common/modal/Alert';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'urql';
export default function Hydrate({ client }) {
    return (React.createElement(Provider, { value: client },
        React.createElement(AppProvider, { value: window.eContext },
            React.createElement(Alert, null,
                React.createElement(Area, { id: "body", className: "wrapper" })))));
}
Hydrate.propTypes = {
    client: PropTypes.shape({
        executeQuery: PropTypes.func.isRequired,
        executeMutation: PropTypes.func.isRequired
    }).isRequired
};
//# sourceMappingURL=Hydrate.js.map