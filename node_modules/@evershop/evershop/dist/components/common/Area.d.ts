import React from 'react';
interface Component {
    id?: string;
    sortOrder?: number;
    props?: Record<string, any>;
    component: {
        default: React.ElementType | React.ReactNode;
    };
}
type AreaID = string;
type ComponentID = string;
interface Components {
    [key: AreaID]: {
        [key: ComponentID]: Component;
    };
}
interface AreaProps {
    className?: string;
    coreComponents?: Component[];
    id: string;
    noOuter?: boolean;
    wrapper?: React.ReactNode | string;
    wrapperProps?: Record<string, any>;
    components?: Components;
}
declare function Area(props: AreaProps): React.JSX.Element;
declare namespace Area {
    var defaultProps: {
        className: undefined;
        coreComponents: never[];
        noOuter: boolean;
        wrapper: string;
        wrapperProps: {};
    };
}
export { Area };
export default Area;
