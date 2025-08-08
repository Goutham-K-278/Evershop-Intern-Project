import Area from '@components/common/Area';
import { useAppState } from '@components/common/context/app';
import React from 'react';
import { createClient, Provider } from 'urql';
import { get } from '../../../lib/util/get.js';
const AuthContext = React.createContext();
export function AuthProvider() {
    const context = useAppState();
    const token = get(context, 'token');
    const client = createClient({
        url: '/v1/graphql'
    });
    return (React.createElement(AuthContext.Provider, { token: token },
        React.createElement(Provider, { value: client },
            React.createElement(Area, { id: "body" }))));
}
export const useToken = () => React.useContext(AuthContext);
//# sourceMappingURL=AuthContext.js.map