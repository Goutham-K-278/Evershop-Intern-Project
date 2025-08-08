/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CKEditorError, setDataInElement } from '@ckeditor/ckeditor5-utils';
/**
 * @module core/editor/utils/elementapimixin
 */
/**
 * Implementation of the {@link module:core/editor/utils/elementapimixin~ElementApi}.
 *
 * @mixin ElementApiMixin
 * @implements module:core/editor/utils/elementapimixin~ElementApi
 */
export default function ElementApiMixin(base) {
    class Mixin extends base {
        updateSourceElement(data = this.data.get()) {
            if (!this.sourceElement) {
                /**
                 * Cannot update the source element of a detached editor.
                 *
                 * The {@link ~ElementApi#updateSourceElement `updateSourceElement()`} method cannot be called if you did not
                 * pass an element to `Editor.create()`.
                 *
                 * @error editor-missing-sourceelement
                 */
                throw new CKEditorError('editor-missing-sourceelement', this);
            }
            const shouldUpdateSourceElement = this.config.get('updateSourceElementOnDestroy');
            const isSourceElementTextArea = this.sourceElement instanceof HTMLTextAreaElement;
            // The data returned by the editor might be unsafe, so we want to prevent rendering
            // unsafe content inside the source element different than <textarea>, which is considered
            // secure. This behaviour could be changed by setting the `updateSourceElementOnDestroy`
            // configuration option to `true`.
            if (!shouldUpdateSourceElement && !isSourceElementTextArea) {
                setDataInElement(this.sourceElement, '');
                return;
            }
            setDataInElement(this.sourceElement, data);
        }
    }
    return Mixin;
}
// Backward compatibility with `mix`.
ElementApiMixin.updateSourceElement = ElementApiMixin(Object).prototype.updateSourceElement;
