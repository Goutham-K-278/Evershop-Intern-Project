export default Modal;
declare function Modal({ modal, title, children, primaryAction }: {
    modal: any;
    title: any;
    children: any;
    primaryAction: any;
}): React.JSX.Element | undefined;
declare namespace Modal {
    namespace propTypes {
        let modal: any;
        let title: any;
        let children: any;
        let primaryAction: any;
    }
    namespace defaultProps {
        let primaryAction_1: null;
        export { primaryAction_1 as primaryAction };
    }
}
import React from 'react';
