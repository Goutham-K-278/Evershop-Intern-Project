export default AddProducts;
declare function AddProducts({ addProductApi, addedProductIDs, closeModal }: {
    addProductApi: any;
    addedProductIDs: any;
    closeModal: any;
}): React.JSX.Element;
declare namespace AddProducts {
    namespace propTypes {
        let addProductApi: any;
        let addedProductIDs: any;
        let closeModal: any;
    }
    namespace defaultProps {
        let addedProductIDs_1: never[];
        export { addedProductIDs_1 as addedProductIDs };
    }
}
import React from 'react';
