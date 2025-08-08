/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module list/documentlist/documentlistpropertiesutils
 */
import { Plugin } from 'ckeditor5/src/core';
import { getAllSupportedStyleTypes, getListStyleTypeFromTypeAttribute, getListTypeFromListStyleType, getTypeAttributeFromListStyleType } from './utils/style';
/**
 * A set of helpers related to document lists.
 */
export default class DocumentListPropertiesUtils extends Plugin {
    /**
     * @inheritDoc
     */
    static get pluginName() {
        return 'DocumentListPropertiesUtils';
    }
    /**
     * Gets all the style types supported by given list type.
     */
    getAllSupportedStyleTypes() {
        return getAllSupportedStyleTypes();
    }
    /**
     * Checks whether the given list-style-type is supported by numbered or bulleted list.
     */
    getListTypeFromListStyleType(listStyleType) {
        return getListTypeFromListStyleType(listStyleType);
    }
    /**
     * Converts `type` attribute of `<ul>` or `<ol>` elements to `list-style-type` equivalent.
     */
    getListStyleTypeFromTypeAttribute(value) {
        return getListStyleTypeFromTypeAttribute(value);
    }
    /**
     * Converts `list-style-type` style to `type` attribute of `<ul>` or `<ol>` elements.
     */
    getTypeAttributeFromListStyleType(value) {
        return getTypeAttributeFromListStyleType(value);
    }
}
