export function Toggle({ name, value, label, onChange, error, instruction }: {
    name: any;
    value: any;
    label: any;
    onChange: any;
    error: any;
    instruction: any;
}): React.JSX.Element;
export namespace Toggle {
    namespace propTypes {
        let error: any;
        let instruction: any;
        let label: any;
        let name: any;
        let onChange: any;
        let value: any;
    }
    namespace defaultProps {
        let error_1: undefined;
        export { error_1 as error };
        let instruction_1: undefined;
        export { instruction_1 as instruction };
        let label_1: undefined;
        export { label_1 as label };
        let onChange_1: undefined;
        export { onChange_1 as onChange };
    }
}
import React from 'react';
