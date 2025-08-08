declare function CollectionProducts({ collection }: {
    collection: any;
}): React.JSX.Element | null;
declare namespace CollectionProducts {
    namespace propTypes {
        let collection: any;
    }
}
export default CollectionProducts;
export const query: "\n  query Query($collection: String, $count: ID) {\n    collection (code: $collection) {\n      collectionId\n      name\n      products (filters: [{key: \"limit\", operation: eq, value: $count}]) {\n        items {\n          ...Product\n        }\n      }\n    }\n  }\n";
export const fragments: "\n  fragment Product on Product {\n    productId\n    name\n    sku\n    price {\n      regular {\n        value\n        text\n      }\n      special {\n        value\n        text\n      }\n    }\n    image {\n      alt\n      url: listing\n    }\n    url\n  }\n";
export const variables: "{\n  collection: getWidgetSetting(\"collection\"),\n  count: getWidgetSetting(\"count\")\n}";
import React from 'react';
