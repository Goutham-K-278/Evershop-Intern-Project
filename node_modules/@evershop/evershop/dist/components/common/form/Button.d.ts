export default Button;
declare function Button({ title, outline, variant, onAction, url, isLoading, type }: {
    title: any;
    outline?: boolean | undefined;
    variant?: string | undefined;
    onAction: any;
    url?: undefined;
    isLoading?: boolean | undefined;
    type?: string | undefined;
}): React.JSX.Element;
declare namespace Button {
    namespace propTypes {
        let isLoading: any;
        let onAction: any;
        let outline: any;
        let title: any;
        let url: any;
        let variant: any;
        let type: any;
    }
    namespace defaultProps {
        let isLoading_1: boolean;
        export { isLoading_1 as isLoading };
        let onAction_1: undefined;
        export { onAction_1 as onAction };
        let outline_1: boolean;
        export { outline_1 as outline };
        let url_1: undefined;
        export { url_1 as url };
        let variant_1: string;
        export { variant_1 as variant };
        let type_1: string;
        export { type_1 as type };
    }
}
import React from 'react';
