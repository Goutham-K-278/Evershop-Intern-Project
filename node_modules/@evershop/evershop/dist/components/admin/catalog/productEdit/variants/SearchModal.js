import { VariantType } from '@components/admin/catalog/productEdit/variants/VariantType';
import { useAppState } from '@components/common/context/app';
import { Input } from '@components/common/form/fields/Input';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import uniqid from 'uniqid';
import { get } from '../../../../../lib/util/get.js';
export function SearchModal({ keyword, variants, addVariant, searchAPI }) {
    const [potentialVariants, setPotentialVariants] = React.useState([]);
    const [typeTimeout, setTypeTimeout] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const context = useAppState();
    const search = (kw) => {
        if (typeTimeout)
            clearTimeout(typeTimeout);
        setTypeTimeout(setTimeout(() => {
            setLoading(true);
            const url = new URL(searchAPI, window.location.origin);
            if (kw) {
                url.searchParams.set('keyword', kw);
            }
            fetch(url, {
                method: 'GET',
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
                if (get(response, 'success') === true) {
                    setPotentialVariants(get(response, 'data.variants').filter((v) => variants.find((vari) => parseInt(vari.variant_product_id, 10) ===
                        parseInt(v.variant_product_id, 10)) === undefined));
                }
                else {
                    setPotentialVariants([]);
                }
            })
                .catch((error) => {
                toast.error(get(error, 'message', 'Failed!'));
            })
                .finally(() => {
                // e.target.value = null
                setLoading(false);
            });
        }, 1500));
    };
    useEffect(() => {
        setPotentialVariants([]);
        search(keyword);
    }, []);
    return (React.createElement("div", null,
        React.createElement(Input, { type: "text", onChange: (e) => {
                e.persist();
                search(e.target.value);
            }, value: keyword }),
        React.createElement("div", { className: "variant-search-result" },
            loading && (React.createElement("div", { className: "variant-search-loading" },
                React.createElement("svg", { style: {
                        background: 'rgb(255, 255, 255, 0)',
                        display: 'block',
                        shapeRendering: 'auto'
                    }, width: "2rem", height: "2rem", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
                    React.createElement("circle", { cx: "50", cy: "50", fill: "none", stroke: "var(--primary)", strokeWidth: "10", r: "43", strokeDasharray: "202.63272615654165 69.54424205218055" },
                        React.createElement("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", dur: "1s", values: "0 50 50;360 50 50", keyTimes: "0;1" }))))),
            potentialVariants.length > 0 && (React.createElement("div", { className: "search-result" },
                React.createElement("table", { className: "listing" },
                    React.createElement("tbody", null, potentialVariants.map((v) => (React.createElement("tr", { className: v.selected === true ? 'selected' : '', key: v.variant_product_id },
                        React.createElement("td", null, v.image.url && React.createElement("img", { src: v.image.url, alt: "" })),
                        React.createElement("td", null,
                            React.createElement("a", { className: "text-interactive", href: "#", onClick: (e) => {
                                    e.preventDefault();
                                    setPotentialVariants(potentialVariants.map((a) => {
                                        if (parseInt(a.variant_product_id, 10) ===
                                            parseInt(v.variant_product_id, 10)) {
                                            return { ...a, selected: true };
                                        }
                                        else {
                                            return a;
                                        }
                                    }));
                                    addVariant(e, {
                                        id: uniqid(),
                                        variant_product_id: v.variant_product_id,
                                        attributes: v.setAttributes,
                                        image: v.image,
                                        sku: v.sku,
                                        price: v.price,
                                        qty: v.qty,
                                        status: v.status,
                                        visibility: 0,
                                        editUrl: v.editUrl
                                    });
                                } },
                                React.createElement("span", null, v.name))),
                        React.createElement("td", null,
                            React.createElement("span", null, new Intl.NumberFormat(context.language, {
                                style: 'currency',
                                currency: context.currency
                            }).format(v.price)))))))))),
            potentialVariants.length <= 0 && (React.createElement("div", { className: "flex justify-center p-4" }, "There is no product to show")))));
}
SearchModal.propTypes = {
    addVariant: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(VariantType).isRequired,
    searchAPI: PropTypes.string.isRequired
};
//# sourceMappingURL=SearchModal.js.map