import Editor from '@components/common/Editor';
import PropTypes from 'prop-types';
import React from 'react';
export default function TextBlock({ textWidget: { text, className } }) {
    return (React.createElement("div", { className: `text-block-widget ${className}` },
        React.createElement(Editor, { rows: text })));
}
TextBlock.propTypes = {
    textWidget: PropTypes.shape({
        text: PropTypes.array,
        className: PropTypes.string
    })
};
TextBlock.defaultProps = {
    textWidget: {
        text: [],
        className: ''
    }
};
export const query = `
  query Query($text: String, $className: String) {
    textWidget(text: $text, className: $className) {
      ...TextBlockWidget
    }
  }
`;
export const fragments = `
  fragment TextBlockWidget on TextBlockWidget {
    text
    className
  }
`;
export const variables = `{
  text: getWidgetSetting("text"),
  className: getWidgetSetting("className")
}`;
//# sourceMappingURL=TextBlock.js.map