declare function CollectionConditionSelector({ condition, setCondition }: {
    condition: any;
    setCondition: any;
}): React.JSX.Element | null;
declare namespace CollectionConditionSelector {
    namespace propTypes {
        let condition: any;
        let setCondition: any;
    }
}
export default CollectionConditionSelector;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
import React from 'react';
