export default CollectionSelector;
declare function CollectionSelector({ onSelect, onUnSelect, selectedIDs, closeModal }: {
    onSelect: any;
    onUnSelect: any;
    selectedIDs: any;
    closeModal: any;
}): React.JSX.Element;
declare namespace CollectionSelector {
    namespace propTypes {
        let onSelect: any;
        let onUnSelect: any;
        let selectedIDs: any;
        let closeModal: any;
    }
    namespace defaultProps {
        let selectedIDs_1: never[];
        export { selectedIDs_1 as selectedIDs };
    }
}
import React from 'react';
