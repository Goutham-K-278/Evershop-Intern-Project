import { useAppState } from '@components/common/context/app';
import Script from '@components/common/Script';
import React from 'react';
import { get } from '../../lib/util/get.js';
export default function BundleJS() {
    const src = get(useAppState(), 'bundleJs');
    return React.createElement(Script, { src: src, isAsync: false });
}
//# sourceMappingURL=BundleJs.js.map