export function Form(props: any): React.JSX.Element;
export namespace Form {
    namespace propTypes {
        let action: any;
        let btnText: any;
        let children: any;
        let id: any;
        let method: any;
        let onComplete: any;
        let onError: any;
        let onStart: any;
        let onSuccess: any;
        let onValidationError: any;
        let submitBtn: any;
        let isJSON: any;
        let dataFilter: any;
    }
    namespace defaultProps {
        let btnText_1: undefined;
        export { btnText_1 as btnText };
        let onComplete_1: undefined;
        export { onComplete_1 as onComplete };
        let onError_1: undefined;
        export { onError_1 as onError };
        let onStart_1: undefined;
        export { onStart_1 as onStart };
        let onSuccess_1: undefined;
        export { onSuccess_1 as onSuccess };
        let onValidationError_1: undefined;
        export { onValidationError_1 as onValidationError };
        let submitBtn_1: boolean;
        export { submitBtn_1 as submitBtn };
        let isJSON_1: boolean;
        export { isJSON_1 as isJSON };
        let action_1: string;
        export { action_1 as action };
        let method_1: string;
        export { method_1 as method };
        let dataFilter_1: undefined;
        export { dataFilter_1 as dataFilter };
    }
}
export const FormContext: React.Context<any>;
export const FormDispatch: React.Context<any>;
export function useFormContext(): any;
export function useFormDispatch(): any;
import React from 'react';
