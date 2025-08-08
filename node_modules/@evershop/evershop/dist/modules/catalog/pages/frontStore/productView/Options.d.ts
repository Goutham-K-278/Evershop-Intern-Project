declare function Options({ options }: {
    options?: never[] | undefined;
}): React.JSX.Element | null;
declare namespace Options {
    namespace propTypes {
        let options: any;
    }
    namespace defaultProps {
        let options_1: never[];
        export { options_1 as options };
    }
}
export default Options;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    product (id: getContextValue('productId')) {\n      options {\n        optionId\n        isRequired\n        optionName\n        optionType\n        values {\n          valueId\n          value\n          extraPrice {\n            value\n            text\n          }\n        }\n      }\n    }\n  }";
import React from 'react';
