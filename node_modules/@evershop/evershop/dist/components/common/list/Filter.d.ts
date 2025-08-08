declare function Filter({ title, options, selectedOption }: {
    title: any;
    options: any;
    selectedOption: any;
}): React.JSX.Element;
declare namespace Filter {
    namespace propTypes {
        let title: any;
        let options: any;
        let selectedOption: any;
    }
    namespace defaultProps {
        let title_1: string;
        export { title_1 as title };
        let options_1: never[];
        export { options_1 as options };
        let selectedOption_1: string;
        export { selectedOption_1 as selectedOption };
    }
}
export default Filter;
import React from 'react';
