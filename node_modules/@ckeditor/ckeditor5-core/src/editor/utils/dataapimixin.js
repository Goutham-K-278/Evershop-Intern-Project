/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module core/editor/utils/dataapimixin
 */
/**
 * Implementation of the {@link module:core/editor/utils/dataapimixin~DataApi}.
 *
 * @mixin DataApiMixin
 * @implements module:core/editor/utils/dataapimixin~DataApi
 */
export default function DataApiMixin(base) {
    class Mixin extends base {
        setData(data) {
            this.data.set(data);
        }
        getData(options) {
            return this.data.get(options);
        }
    }
    return Mixin;
}
// Backward compatibility with `mix`.
{
    const mixin = DataApiMixin(Object);
    DataApiMixin.setData = mixin.prototype.setData;
    DataApiMixin.getData = mixin.prototype.getData;
}
