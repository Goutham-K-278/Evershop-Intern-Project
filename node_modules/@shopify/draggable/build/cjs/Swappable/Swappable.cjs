'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Draggable = require('../Draggable/Draggable.cjs');
require('../Draggable/DragEvent/DragEvent.cjs');
require('../Draggable/DraggableEvent/DraggableEvent.cjs');
require('../Draggable/Plugins/Announcement/Announcement.cjs');
require('../Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.cjs');
require('../Draggable/Sensors/SensorEvent/SensorEvent.cjs');
require('../Draggable/Sensors/TouchSensor/TouchSensor.cjs');
var SwappableEvent = require('./SwappableEvent/SwappableEvent.cjs');

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

class Swappable extends Draggable.default {

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
    const swappableStartEvent = new SwappableEvent.SwappableStartEvent({
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
    const swappableSwapEvent = new SwappableEvent.SwappableSwapEvent({
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
    const swappableSwappedEvent = new SwappableEvent.SwappableSwappedEvent({
      dragEvent: event,
      swappedElement: event.over
    });
    this.trigger(swappableSwappedEvent);
  }

  [onDragStop](event) {
    const swappableStopEvent = new SwappableEvent.SwappableStopEvent({
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

exports.default = Swappable;
