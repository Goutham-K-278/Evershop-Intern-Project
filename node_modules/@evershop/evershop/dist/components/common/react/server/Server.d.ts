export default ServerHtml;
declare function ServerHtml({ css, js, appContext }: {
    css: any;
    js: any;
    appContext: any;
}): React.JSX.Element;
declare namespace ServerHtml {
    namespace propTypes {
        let css: any;
        let js: any;
        let appContext: any;
    }
}
import React from 'react';
