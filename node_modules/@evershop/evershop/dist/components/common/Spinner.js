import PropTypes from 'prop-types';
import React from 'react';
function Spinner({ width, height }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { margin: 'auto' }, width: width, height: height, display: "block", preserveAspectRatio: "xMidYMid", viewBox: "0 0 100 100" },
        React.createElement("g", { transform: "translate(50 50) scale(.7)" },
            React.createElement("circle", { r: "50", fill: "#215d38" }),
            React.createElement("circle", { cy: "-28", r: "15", fill: "#14a651" },
                React.createElement("animateTransform", { attributeName: "transform", dur: "1s", keyTimes: "0;1", repeatCount: "indefinite", type: "rotate", values: "0 0 0;360 0 0" })))));
}
Spinner.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};
Spinner.defaultProps = {
    width: 60,
    height: 60
};
export default Spinner;
//# sourceMappingURL=Spinner.js.map