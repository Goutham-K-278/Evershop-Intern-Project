import ProductSkuSelector from '@components/admin/promotion/couponEdit/ProductSkuSelector';
import { useModal } from '@components/common/modal/useModal';
import PropTypes from 'prop-types';
import React from 'react';
export default function SkuConditionSelector({ condition, setCondition, isMulti }) {
    const skus = Array.isArray(condition.value) ? condition.value : [];
    const [selectedSKUs, setSelectedSKUs] = React.useState(skus || []);
    const modal = useModal();
    const closeModal = () => {
        modal.closeModal();
    };
    const onSelect = (sku) => {
        if (!isMulti) {
            setSelectedSKUs([sku]);
            return;
        }
        setSelectedSKUs([sku, ...selectedSKUs]);
    };
    const onUnSelect = (sku) => {
        setSelectedSKUs(selectedSKUs.filter((s) => s !== sku));
    };
    React.useEffect(() => {
        setCondition({
            ...condition,
            value: selectedSKUs
        });
    }, [selectedSKUs]);
    if (condition.key !== 'sku') {
        return null;
    }
    return (React.createElement("div", null,
        React.createElement("a", { href: "#", className: "text-interactive hover:underline", onClick: (e) => {
                e.preventDefault();
                modal.openModal();
            } },
            selectedSKUs.map((sku, index) => (React.createElement("span", { key: sku },
                index === 0 && React.createElement("span", { className: "italic" },
                    "\u2018",
                    sku,
                    "\u2019"),
                index === 1 && React.createElement("span", null,
                    " and ",
                    selectedSKUs.length - 1,
                    " more")))),
            selectedSKUs.length === 0 && React.createElement("span", null, "Choose SKUs")),
        modal.state.showing && (React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
            React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                React.createElement("div", { className: "modal" },
                    React.createElement(ProductSkuSelector, { onSelect: onSelect, onUnSelect: onUnSelect, selectedChecker: ({ sku }) => selectedSKUs.includes(sku), closeModal: closeModal })))))));
}
SkuConditionSelector.propTypes = {
    condition: PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
            PropTypes.string,
            PropTypes.number
        ])
    }).isRequired,
    setCondition: PropTypes.func.isRequired,
    isMulti: PropTypes.bool
};
SkuConditionSelector.defaultProps = {
    isMulti: true
};
export const layout = {
    areaId: 'couponProductConditionValue',
    sortOrder: 15
};
//# sourceMappingURL=SkuConditionSelector.js.map