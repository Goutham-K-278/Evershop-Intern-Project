declare function General({ product, browserApi, deleteApi, uploadApi, folderCreateApi, setting, productTaxClasses: { items: taxClasses } }: {
    product: any;
    browserApi: any;
    deleteApi: any;
    uploadApi: any;
    folderCreateApi: any;
    setting: any;
    productTaxClasses: {
        items: any;
    };
}): React.JSX.Element;
declare namespace General {
    namespace propTypes {
        let browserApi: any;
        let deleteApi: any;
        let folderCreateApi: any;
        let uploadApi: any;
        let product: any;
        let setting: any;
        let productTaxClasses: any;
    }
    namespace defaultProps {
        let product_1: undefined;
        export { product_1 as product };
        export namespace productTaxClasses_1 {
            let items: never[];
        }
        export { productTaxClasses_1 as productTaxClasses };
    }
}
export default General;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    product(id: getContextValue(\"productId\", null)) {\n      productId\n      name\n      description\n      sku\n      taxClass\n      price {\n        regular {\n          value\n          currency\n        }\n      }\n      weight {\n        value\n        unit\n      }\n      category {\n        categoryId\n        path {\n          name\n        }\n      }\n    }\n    setting {\n      weightUnit\n      storeCurrency\n    }\n    browserApi: url(routeId: \"fileBrowser\", params: [{key: \"0\", value: \"\"}])\n    deleteApi: url(routeId: \"fileDelete\", params: [{key: \"0\", value: \"\"}])\n    uploadApi: url(routeId: \"imageUpload\", params: [{key: \"0\", value: \"\"}])\n    folderCreateApi: url(routeId: \"folderCreate\")\n    productTaxClasses: taxClasses {\n      items {\n        value: taxClassId\n        text: name\n      }\n    }\n  }\n";
import React from 'react';
