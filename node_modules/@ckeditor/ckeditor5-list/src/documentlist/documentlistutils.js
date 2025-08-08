/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { Plugin } from 'ckeditor5/src/core';
import { expandListBlocksToCompleteList, isFirstBlockOfListItem, isListItemBlock } from './utils/model';
/**
 * A set of helpers related to document lists.
 */
export default class DocumentListUtils extends Plugin {
    /**
     * @inheritDoc
     */
    static get pluginName() {
        return 'DocumentListUtils';
    }
    /**
     * Expands the given list of selected blocks to include all the items of the lists they're in.
     *
     * @param blocks The list of selected blocks.
     */
    expandListBlocksToCompleteList(blocks) {
        return expandListBlocksToCompleteList(blocks);
    }
    /**
     * Check if the given block is the first in the list item.
     *
     * @param listBlock The list block element.
     */
    isFirstBlockOfListItem(listBlock) {
        return isFirstBlockOfListItem(listBlock);
    }
    /**
     * Returns true if the given model node is a list item block.
     *
     * @param node A model node.
     */
    isListItemBlock(node) {
        return isListItemBlock(node);
    }
}
