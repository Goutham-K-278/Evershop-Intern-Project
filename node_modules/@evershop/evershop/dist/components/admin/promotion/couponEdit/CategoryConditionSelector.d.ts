declare function CategoryConditionSelector({ condition, setCondition }: {
    condition: any;
    setCondition: any;
}): React.JSX.Element | null;
declare namespace CategoryConditionSelector {
    namespace propTypes {
        let condition: any;
        let setCondition: any;
    }
}
export default CategoryConditionSelector;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
import React from 'react';
