declare function Images({ product: { uuid, image, gallery } }: {
    product: {
        uuid: any;
        image: any;
        gallery?: never[] | undefined;
    };
}): React.JSX.Element;
declare namespace Images {
    namespace propTypes {
        let product: any;
    }
}
export default Images;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    product (id: getContextValue('productId')) {\n      uuid\n      image {\n        alt\n        thumb\n        single\n      }\n      gallery {\n        alt\n        thumb\n        single\n      }\n  }\n}";
import React from 'react';
