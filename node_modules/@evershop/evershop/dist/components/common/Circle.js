import React from 'react';
import './Circle.scss';
export function Circle({ variant = 'default' }) {
    const circleVariant = [
        'default',
        'success',
        'info',
        'attention',
        'critical',
        'warning',
        'new'
    ].includes(variant)
        ? `${variant}`
        : 'default';
    return (React.createElement("span", { className: `${circleVariant} circle` },
        React.createElement("span", { className: "self-center" },
            React.createElement("span", null))));
}
//# sourceMappingURL=Circle.js.map