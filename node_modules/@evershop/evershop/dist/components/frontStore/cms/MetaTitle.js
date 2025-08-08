import { useAppState } from '@components/common/context/app';
import Title from '@components/common/Title';
import React from 'react';
import { get } from '../../../lib/util/get.js';
export default function MetaTitle() {
    const title = get(useAppState(), 'metaTitle');
    return React.createElement(Title, { title: title });
}
//# sourceMappingURL=MetaTitle.js.map