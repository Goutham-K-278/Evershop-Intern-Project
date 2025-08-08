import Draggable from '../Draggable/Draggable.mjs';
import '../Draggable/Plugins/Announcement/Announcement.mjs';
import '../Draggable/Sensors/TouchSensor/TouchSensor.mjs';
import { SwappableStartEvent, SwappableSwapEvent, SwappableSwappedEvent, SwappableStopEvent } from './SwappableEvent/SwappableEvent.mjs';

const onDragStart = Symbol('onDragStart');
const onDragOver = Symbol('onDragOver');
const onDragStop = Symbol('onDragStop');

function onSwappableSwappedDefaultAnnouncement({
  dragEvent,
  swappedElement
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'swappable element';
  const overText = swappedElement.textContent.trim() || swappedElement.id || 'swappable element';
  return `Swapped ${sourceText} with ${overText}`;
}

const defaultAnnouncements = {
  'swappabled:swapped': onSwappableSwappedDefaultAnnouncement
};

class Swappable extends Draggable {

  constructor(containers = [], options = {}) {
    super(containers, {
      ...options,
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      }
    });

    this.lastOver = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this.on('drag:start', this[onDragStart]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
  }

  destroy() {
    super.destroy();
    this.off('drag:start', this._onDragStart).off('drag:over', this._onDragOver).off('drag:stop', this._onDragStop);
  }

  [onDragStart](event) {
    const swappableStartEvent = new SwappableStartEvent({
      dragEvent: event
    });
    this.trigger(swappableStartEvent);
    if (swappableStartEvent.canceled()) {
      event.cancel();
    }
  }

  [onDragOver](event) {
    if (event.over === event.originalSource || event.over === event.source || event.canceled()) {
      return;
    }
    const swappableSwapEvent = new SwappableSwapEvent({
      dragEvent: event,
      over: event.over,
      overContainer: event.overContainer
    });
    this.trigger(swappableSwapEvent);
    if (swappableSwapEvent.canceled()) {
      return;
    }

    if (this.lastOver && this.lastOver !== event.over) {
      swap(this.lastOver, event.source);
    }
    if (this.lastOver === event.over) {
      this.lastOver = null;
    } else {
      this.lastOver = event.over;
    }
    swap(event.source, event.over);
    const swappableSwappedEvent = new SwappableSwappedEvent({
      dragEvent: event,
      swappedElement: event.over
    });
    this.trigger(swappableSwappedEvent);
  }

  [onDragStop](event) {
    const swappableStopEvent = new SwappableStopEvent({
      dragEvent: event
    });
    this.trigger(swappableStopEvent);
    this.lastOver = null;
  }
}
function withTempElement(callback) {
  const tmpElement = document.createElement('div');
  callback(tmpElement);
  tmpElement.remove();
}
function swap(source, over) {
  const overParent = over.parentNode;
  const sourceParent = source.parentNode;
  withTempElement(tmpElement => {
    sourceParent.insertBefore(tmpElement, source);
    overParent.insertBefore(source, over);
    sourceParent.insertBefore(over, tmpElement);
  });
}

export { Swappable as default };
