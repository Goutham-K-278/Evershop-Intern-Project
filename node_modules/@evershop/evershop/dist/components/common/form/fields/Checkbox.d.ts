export function Checkbox({ name, label, onChange, error, instruction, isChecked }: {
    name: any;
    label: any;
    onChange: any;
    error: any;
    instruction: any;
    isChecked?: boolean | undefined;
}): React.JSX.Element;
export namespace Checkbox {
    namespace propTypes {
        let error: any;
        let instruction: any;
        let isChecked: any;
        let label: any;
        let name: any;
        let onChange: any;
    }
    namespace defaultProps {
        let error_1: undefined;
        export { error_1 as error };
        let instruction_1: string;
        export { instruction_1 as instruction };
        let isChecked_1: boolean;
        export { isChecked_1 as isChecked };
        let label_1: string;
        export { label_1 as label };
        let name_1: undefined;
        export { name_1 as name };
    }
}
import React from 'react';
