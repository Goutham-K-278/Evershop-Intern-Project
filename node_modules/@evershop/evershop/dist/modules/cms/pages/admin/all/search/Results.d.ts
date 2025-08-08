export function Results({ keyword, results }: {
    keyword: any;
    results?: {} | undefined;
}): React.JSX.Element;
export namespace Results {
    namespace propTypes {
        let keyword: any;
        let results: any;
    }
    namespace defaultProps {
        let keyword_1: undefined;
        export { keyword_1 as keyword };
        let results_1: never[];
        export { results_1 as results };
    }
}
import React from 'react';
