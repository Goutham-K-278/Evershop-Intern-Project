export default CollectionProductsSetting;
export const query: "\n  query Query($collection: String, $count: Int) {\n    collectionProductsWidget(collection: $collection, count: $count) {\n      collection\n      count\n    }\n  }\n";
export const variables: "{\n  collection: getWidgetSetting(\"collection\"),\n  count: getWidgetSetting(\"count\")\n}";
declare function CollectionProductsSetting({ collectionProductsWidget: { collection, count } }: {
    collectionProductsWidget: {
        collection: any;
        count: any;
    };
}): React.JSX.Element;
declare namespace CollectionProductsSetting {
    namespace propTypes {
        let collectionProductsWidget: any;
    }
    namespace defaultProps {
        export namespace collectionProductsWidget_1 {
            let collection: string;
            let count: number;
        }
        export { collectionProductsWidget_1 as collectionProductsWidget };
    }
}
import React from 'react';
