export function Card({ title, actions, subdued, children }: {
    title: any;
    actions?: never[] | undefined;
    subdued?: boolean | undefined;
    children: any;
}): React.JSX.Element;
export namespace Card {
    export namespace propTypes {
        let actions: any;
        let children: any;
        let subdued: any;
        let title: any;
    }
    export namespace defaultProps {
        let actions_1: never[];
        export { actions_1 as actions };
        let subdued_1: boolean;
        export { subdued_1 as subdued };
        let title_1: string;
        export { title_1 as title };
    }
    export { Session };
}
import React from 'react';
declare function Session({ actions, title, children }: {
    actions?: never[] | undefined;
    title: any;
    children: any;
}): React.JSX.Element;
declare namespace Session {
    export namespace propTypes_1 {
        let actions_2: any;
        export { actions_2 as actions };
        let children_1: any;
        export { children_1 as children };
        let title_2: any;
        export { title_2 as title };
    }
    export { propTypes_1 as propTypes };
    export namespace defaultProps_1 {
        let actions_3: never[];
        export { actions_3 as actions };
        let title_3: string;
        export { title_3 as title };
        let children_2: null;
        export { children_2 as children };
    }
    export { defaultProps_1 as defaultProps };
}
export {};
