import PropTypes from 'prop-types';
import React from 'react';
import './Badge.scss';
export default function Badge({ title, variant = 'default', progress = 'default' }) {
    const badgeVariant = [
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
    const badgeProgress = [
        'incomplete',
        'complete',
        'partiallycomplete'
    ].includes(progress)
        ? `${progress}`
        : 'default';
    return (React.createElement("span", { className: `${badgeVariant} badge` },
        React.createElement("span", { className: `${badgeProgress} progress rounded-full` }, progress === 'partiallycomplete' && React.createElement("span", null)),
        React.createElement("span", { className: "self-center title" }, title)));
}
Badge.propTypes = {
    progress: PropTypes.oneOf(['incomplete', 'complete', 'partiallycomplete'])
        .isRequired,
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf([
        'default',
        'success',
        'info',
        'attention',
        'critical',
        'warning',
        'new'
    ]).isRequired
};
//# sourceMappingURL=Badge.js.map