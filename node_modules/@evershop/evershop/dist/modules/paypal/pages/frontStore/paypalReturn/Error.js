import React from 'react';
import { _ } from '../../../../../lib/locale/translate/_.js';
export default function Error() {
    return (React.createElement("div", { className: "text-center" },
        React.createElement("h1", null, _('Error')),
        React.createElement("p", null, _('We are sorry. There was an error processing your payment. Your card was not charged. Please try again.'))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
//# sourceMappingURL=Error.js.map