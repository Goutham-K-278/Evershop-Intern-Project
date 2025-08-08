import Button from '@components/common/form/Button';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from '../../../../../lib/util/get.js';
import './Image.scss';
import { Card } from '@components/admin/cms/Card';
export default function Image({ category, imageUploadUrl }) {
    const [image, setImage] = useState(category === null || category === void 0 ? void 0 : category.image);
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    const onChange = (e) => {
        e.persist();
        const formData = new FormData();
        for (let i = 0; i < e.target.files.length; i += 1) {
            formData.append('images', e.target.files[i]);
        }
        setLoading(true);
        fetch(`${imageUploadUrl}/catalog/${Math.floor(Math.random() * (9999 - 1000)) + 1000}/${Math.floor(Math.random() * (9999 - 1000)) + 1000}`, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((response) => {
            if (!response.headers.get('content-type') ||
                !response.headers.get('content-type').includes('application/json')) {
                throw new TypeError('Something wrong. Please try again');
            }
            return response.json();
        })
            .then((response) => {
            if (!response.error) {
                setImage(response.data.files[0]);
            }
            else {
                toast.error(get(response, 'error.message', 'Failed!'));
            }
        })
            .catch((error) => {
            toast.error(error.message);
        })
            .finally(() => {
            e.target.value = null;
            setLoading(false);
        });
    };
    return (React.createElement(Card, { title: "Category banner", actions: image
            ? [
                { name: 'Change', onAction: () => ref.current.click() },
                {
                    name: 'Remove',
                    variant: 'critical',
                    onAction: () => setImage(undefined)
                }
            ]
            : [] },
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "relative" },
                !image && (React.createElement("label", { htmlFor: "categoryImageUpload", className: "flex flex-col justify-center image-uploader" },
                    React.createElement("div", { className: "uploader-icon flex justify-center" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                            React.createElement("path", { fillRule: "evenodd", d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z", clipRule: "evenodd" }))),
                    React.createElement("div", { className: "flex justify-center" },
                        React.createElement(Button, { title: "Add image", variant: "default", onAction: () => ref.current.click() })),
                    React.createElement("div", { className: "flex justify-center mt-4" },
                        React.createElement("span", { style: { color: '#6d7175', fontSize: '1.2rem' } }, "click to upload an image")))),
                image && (React.createElement("div", { className: "category-image" },
                    React.createElement("img", { src: image.url, alt: ' ' }))),
                image && React.createElement("input", { type: "hidden", value: image.url, name: "image" }),
                !image && React.createElement("input", { type: "hidden", value: "", name: "image" }),
                React.createElement("div", { className: "invisible", style: { width: '1px', height: '1px' } },
                    React.createElement("input", { id: "categoryImageUpload", type: "file", onChange: onChange, ref: ref })),
                loading === true && (React.createElement("div", { className: "category__image__loading flex justify-center" },
                    React.createElement("div", { className: "self-center" },
                        React.createElement("svg", { style: { display: 'block', shapeRendering: 'auto' }, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
                            React.createElement("circle", { cx: "50", cy: "50", fill: "none", stroke: "var(--primary)", strokeWidth: "10", r: "43", strokeDasharray: "202.63272615654165 69.54424205218055" },
                                React.createElement("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", dur: "1s", values: "0 50 50;360 50 50", keyTimes: "0;1" }))))))))));
}
Image.propTypes = {
    category: PropTypes.shape({
        image: PropTypes.shape({
            url: PropTypes.string
        })
    }),
    imageUploadUrl: PropTypes.string.isRequired
};
Image.defaultProps = {
    category: undefined
};
export const layout = {
    areaId: 'rightSide',
    sortOrder: 10
};
export const query = `
  query Query {
    category(id: getContextValue("categoryId", null)) {
      image {
        url
      }
    }
    imageUploadUrl: url(routeId: "imageUpload", params: [{key: "0", value: ""}])
  }
`;
//# sourceMappingURL=Image.js.map