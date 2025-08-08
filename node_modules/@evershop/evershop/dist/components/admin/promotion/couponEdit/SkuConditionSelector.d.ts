declare function SkuConditionSelector({ condition, setCondition, isMulti }: {
    condition: any;
    setCondition: any;
    isMulti: any;
}): React.JSX.Element | null;
declare namespace SkuConditionSelector {
    namespace propTypes {
        let condition: any;
        let setCondition: any;
        let isMulti: any;
    }
    namespace defaultProps {
        let isMulti_1: boolean;
        export { isMulti_1 as isMulti };
    }
}
export default SkuConditionSelector;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
import React from 'react';
