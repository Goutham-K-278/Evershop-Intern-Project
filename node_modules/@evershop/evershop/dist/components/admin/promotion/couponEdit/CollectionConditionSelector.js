import CollectionSelector from '@components/admin/promotion/couponEdit/CollectionSelector';
import { useModal } from '@components/common/modal/useModal';
import PropTypes from 'prop-types';
import React from 'react';
export default function CollectionConditionSelector({ condition, setCondition }) {
    const collections = Array.isArray(condition.value) ? condition.value : [];
    const [selectedIDs, setSelectedIDs] = React.useState(collections);
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
    if (condition.key !== 'collection') {
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
            selectedIDs.length === 0 && React.createElement("span", null, "Choose collections")),
        modal.state.showing && (React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
            React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                React.createElement("div", { className: "modal" },
                    React.createElement(CollectionSelector, { onSelect: onSelect, onUnSelect: onUnSelect, selectedIDs: selectedIDs.map((id) => parseInt(id, 10)), closeModal: closeModal })))))));
}
CollectionConditionSelector.propTypes = {
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
//# sourceMappingURL=CollectionConditionSelector.js.map