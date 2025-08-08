import { SearchModal } from '@components/admin/catalog/productEdit/variants/SearchModal';
import { VariantType } from '@components/admin/catalog/productEdit/variants/VariantType';
import { Input } from '@components/common/form/fields/Input';
import { useAlertContext } from '@components/common/modal/Alert';
import PropTypes from 'prop-types';
import React from 'react';
export function Search({ addVariant, variants }) {
    const searchInput = React.useRef();
    const { openAlert, closeAlert } = useAlertContext();
    const openModal = (e) => {
        e.persist();
        openAlert({
            heading: 'Search for variant',
            content: (React.createElement(SearchModal, { keyword: e.target.value, variants: variants, addVariant: addVariant })),
            primaryAction: {
                title: 'Done',
                onAction: closeAlert,
                variant: 'primary'
            }
        });
    };
    return (React.createElement("div", { className: "flex justify-between mt-4" },
        React.createElement("div", { className: "self-center" },
            React.createElement("div", { className: "autocomplete-search" },
                React.createElement(Input, { ref: searchInput, type: "text", placeholder: "Search for variant", onChange: (e) => openModal(e) })))));
}
Search.propTypes = {
    addVariant: PropTypes.func.isRequired,
    variants: PropTypes.arrayOf(VariantType).isRequired
};
//# sourceMappingURL=Search.js.map