import AttributeGroupSelector from '@components/admin/promotion/couponEdit/AttributeGroupSelector';
import { useModal } from '@components/common/modal/useModal';
import PropTypes from 'prop-types';
import React from 'react';
export default function AttributeGroupConditionSelector({ condition, setCondition }) {
    const groups = Array.isArray(condition.value) ? condition.value : [];
    const [selectedIDs, setSelectedIDs] = React.useState(groups);
    const modal = useModal();
    const closeModal = () => {
        modal.closeModal();
    };
    const onSelect = (ID) => {
        setSelectedIDs([ID, ...selectedIDs]);
    };
    const onUnSelect = (ID) => {
        setSelectedIDs(selectedIDs.filter((s) => s !== ID));
    };
    React.useEffect(() => {
        setCondition({
            ...condition,
            value: selectedIDs
        });
    }, [selectedIDs]);
    if (condition.key !== 'attribute_group') {
        return null;
    }
    return (React.createElement("div", null,
        React.createElement("a", { href: "#", className: "text-interactive hover:underline", onClick: (e) => {
                e.preventDefault();
                modal.openModal();
            } },
            selectedIDs.map((ID, index) => (
            // only show 2 SKUs and add +{number} if there are more than 2 SKUs
            React.createElement("span", { key: ID },
                index === 0 && React.createElement("span", { className: "italic" },
                    "\u2018",
                    ID,
                    "\u2019"),
                index === 1 && React.createElement("span", null,
                    " and ",
                    selectedIDs.length - 1,
                    " more")))),
            selectedIDs.length === 0 && React.createElement("span", null, "Choose attribute groups")),
        modal.state.showing && (React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
            React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                React.createElement("div", { className: "modal" },
                    React.createElement(AttributeGroupSelector, { onSelect: onSelect, onUnSelect: onUnSelect, selectedIDs: selectedIDs, closeModal: closeModal })))))));
}
AttributeGroupConditionSelector.propTypes = {
    condition: PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
            PropTypes.string,
            PropTypes.number
        ])
    }).isRequired,
    setCondition: PropTypes.func.isRequired
};
export const layout = {
    areaId: 'couponProductConditionValue',
    sortOrder: 15
};
//# sourceMappingURL=AttributeGroupConditionSelector.js.map