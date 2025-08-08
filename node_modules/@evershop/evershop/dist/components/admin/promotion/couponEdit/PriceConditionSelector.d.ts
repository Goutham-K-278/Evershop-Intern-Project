declare function PriceConditionSelector({ condition, setCondition }: {
    condition: any;
    setCondition: any;
}): React.JSX.Element | null;
declare namespace PriceConditionSelector {
    namespace propTypes {
        let condition: any;
        let setCondition: any;
    }
}
export default PriceConditionSelector;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
import React from 'react';
