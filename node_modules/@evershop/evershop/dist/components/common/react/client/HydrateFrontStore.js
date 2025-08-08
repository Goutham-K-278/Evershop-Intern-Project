import React from 'react';
import { createClient } from 'urql';
import Hydrate from './Hydrate';
const client = createClient({
    url: '/api/graphql'
});
export function HydrateFrontStore() {
    return React.createElement(Hydrate, { client: client });
}
//# sourceMappingURL=HydrateFrontStore.js.map