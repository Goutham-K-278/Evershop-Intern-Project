import PropTypes from 'prop-types';
import React from 'react';
function Title({ step }) {
    return (React.createElement("div", { className: "flex space-x-4 step-title mb-4 mt-4" },
        step.isCompleted === true && (React.createElement("svg", { className: "self-center", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
            React.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
            React.createElement("polyline", { points: "22 4 12 14.01 9 11.01" }))),
        step.isCompleted === false && (React.createElement("svg", { className: "self-center", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
            React.createElement("circle", { cx: "12", cy: "12", r: "10" }))),
        React.createElement("h3", { className: "self-center" }, step.title)));
}
Title.propTypes = {
    step: PropTypes.shape({
        isCompleted: PropTypes.bool,
        title: PropTypes.string
    }).isRequired
};
export { Title };
//# sourceMappingURL=StepTitle.js.map