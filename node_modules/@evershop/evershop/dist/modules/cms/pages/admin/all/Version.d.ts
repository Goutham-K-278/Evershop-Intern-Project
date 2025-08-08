declare function Version({ version }: {
    version: any;
}): React.JSX.Element;
declare namespace Version {
    namespace propTypes {
        let version: any;
    }
}
export default Version;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query query {\n    version\n  }\n";
import React from 'react';
