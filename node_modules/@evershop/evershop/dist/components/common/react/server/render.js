import { AppProvider } from '@components/common/context/app';
import ServerHtml from '@components/common/react/server/Server';
import React from 'react';
import { renderToString } from 'react-dom/server';
function renderHtml(js, css, contextData, langeCode) {
    const source = renderToString(React.createElement(AppProvider, { value: JSON.parse(contextData) },
        React.createElement(ServerHtml, { js: js, css: css, appContext: `var eContext = ${contextData}` })));
    return `<!DOCTYPE html><html id="root" lang="${langeCode}">${source}</html>`;
}
export { renderHtml };
//# sourceMappingURL=render.js.map