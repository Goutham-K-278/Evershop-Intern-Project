import React from 'react';
import { createClient } from 'urql';
import Hydrate from './Hydrate';
const client = createClient({
    url: '/api/admin/graphql'
});
export function HydrateAdmin() {
    return React.createElement(Hydrate, { client: client });
}
//# sourceMappingURL=HydrateAdmin.js.map