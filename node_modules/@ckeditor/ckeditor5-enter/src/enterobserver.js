/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module enter/enterobserver
 */
import { Observer, DomEventData, BubblingEventInfo } from '@ckeditor/ckeditor5-engine';
const ENTER_EVENT_TYPES = {
    insertParagraph: { isSoft: false },
    insertLineBreak: { isSoft: true }
};
/**
 * Enter observer introduces the {@link module:engine/view/document~Document#event:enter `Document#enter`} event.
 *
 * @extends module:engine/view/observer/observer~Observer
 */
export default class EnterObserver extends Observer {
    /**
     * @inheritDoc
     */
    constructor(view) {
        super(view);
        const doc = this.document;
        doc.on('beforeinput', (evt, data) => {
            if (!this.isEnabled) {
                return;
            }
            const domEvent = data.domEvent;
            const enterEventSpec = ENTER_EVENT_TYPES[data.inputType];
            if (!enterEventSpec) {
                return;
            }
            const event = new BubblingEventInfo(doc, 'enter', data.targetRanges[0]);
            doc.fire(event, new DomEventData(view, domEvent, {
                isSoft: enterEventSpec.isSoft
            }));
            // Stop `beforeinput` event if `enter` event was stopped.
            // https://github.com/ckeditor/ckeditor5/issues/753
            if (event.stop.called) {
                evt.stop();
            }
        });
    }
    /**
     * @inheritDoc
     */
    observe() { }
}
