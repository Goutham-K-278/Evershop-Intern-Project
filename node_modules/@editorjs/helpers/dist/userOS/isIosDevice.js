import { notEmpty } from '../empty';
/**
 * True if current device runs iOS
 */
export const isIosDevice = () => typeof window !== 'undefined'
    && window.navigator !== null
    && notEmpty(window.navigator.platform)
    && (/iP(ad|hone|od)/.test(window.navigator.platform)
        || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1));
//# sourceMappingURL=isIosDevice.js.map