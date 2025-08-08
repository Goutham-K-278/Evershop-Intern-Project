import PropTypes from 'prop-types';
import React from 'react';
import getColumnClasses from './form/fields/editor/GetColumnClasses';
import getRowClasses from './form/fields/editor/GetRowClasses';
function Paragraph({ data }) {
    return React.createElement("p", { dangerouslySetInnerHTML: { __html: data.text } });
}
Paragraph.propTypes = {
    data: PropTypes.shape({
        text: PropTypes.string.isRequired
    }).isRequired
};
function Header({ data }) {
    const Tag = `h${data.level}`;
    return React.createElement(Tag, null, data.text);
}
Header.propTypes = {
    data: PropTypes.shape({
        level: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};
function List({ data }) {
    return (React.createElement("ul", null, data.items.map((item, index) => (React.createElement("li", { key: index }, item)))));
}
List.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};
function Quote({ data }) {
    return (React.createElement("blockquote", null,
        React.createElement("p", null,
            "\"",
            data.text,
            "\""),
        data.caption && React.createElement("cite", null,
            "- ",
            data.caption)));
}
Quote.propTypes = {
    data: PropTypes.shape({
        text: PropTypes.string.isRequired,
        caption: PropTypes.string
    }).isRequired
};
function Image({ data }) {
    const { file, caption, withBorder, withBackground, stretched, url } = data;
    const imageStyles = {
        border: withBorder ? '1px solid #ccc' : 'none',
        backgroundColor: withBackground ? '#f9f9f9' : 'transparent',
        width: stretched ? '100%' : 'auto',
        display: 'block',
        maxWidth: '100%',
        margin: '0 auto' // Center the image if not stretched
    };
    const imageElement = (React.createElement("img", { src: file.url, alt: caption || 'Image', style: imageStyles }));
    return (React.createElement("div", null,
        url ? (React.createElement("a", { href: url, target: "_blank", rel: "noopener noreferrer" }, imageElement)) : (imageElement),
        caption && (React.createElement("p", { style: { textAlign: 'center', marginTop: '10px' } }, caption))));
}
Image.propTypes = {
    data: PropTypes.shape({
        file: PropTypes.shape({
            url: PropTypes.string.isRequired
        }).isRequired,
        caption: PropTypes.string,
        withBorder: PropTypes.bool,
        withBackground: PropTypes.bool,
        stretched: PropTypes.bool,
        url: PropTypes.string
    }).isRequired
};
function RawHtml({ data }) {
    return React.createElement("div", { dangerouslySetInnerHTML: { __html: data.html } });
}
RawHtml.propTypes = {
    data: PropTypes.shape({
        html: PropTypes.string.isRequired
    }).isRequired
};
function RenderEditorJS({ blocks }) {
    return (React.createElement("div", { className: "prose prose-base max-w-none" }, blocks.map((block, index) => {
        switch (block.type) {
            case 'paragraph':
                return React.createElement(Paragraph, { key: index, data: block.data });
            case 'header':
                return React.createElement(Header, { key: index, data: block.data });
            case 'list':
                return React.createElement(List, { key: index, data: block.data });
            case 'image':
                return React.createElement(Image, { key: index, data: block.data });
            case 'quote':
                return React.createElement(Quote, { key: index, data: block.data });
            case 'raw':
                return React.createElement(RawHtml, { key: index, data: block.data });
            default:
                return null;
        }
    })));
}
RenderEditorJS.propTypes = {
    blocks: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired
    })).isRequired
};
export default function Editor({ rows }) {
    return (React.createElement("div", { className: "editor__html" }, rows.map((row, index) => {
        const rowClasses = getRowClasses(row.size);
        return (React.createElement("div", { className: `row__container mt-12 grid md:${rowClasses} grid-cols-1 gap-8`, key: index }, row.columns.map((column, index) => {
            var _a, _b;
            const columnClasses = getColumnClasses(column.size);
            return (React.createElement("div", { className: `column__container md:${columnClasses} col-span-1`, key: index }, ((_a = column.data) === null || _a === void 0 ? void 0 : _a.blocks) && (React.createElement(RenderEditorJS, { blocks: (_b = column.data) === null || _b === void 0 ? void 0 : _b.blocks }))));
        })));
    })));
}
Editor.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.shape({
        size: PropTypes.number.isRequired,
        columns: PropTypes.arrayOf(PropTypes.shape({
            size: PropTypes.number.isRequired,
            data: PropTypes.object
        })).isRequired
    })).isRequired
};
//# sourceMappingURL=Editor.js.map