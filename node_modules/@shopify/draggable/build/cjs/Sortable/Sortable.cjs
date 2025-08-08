'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Draggable = require('../Draggable/Draggable.cjs');
require('../Draggable/DragEvent/DragEvent.cjs');
require('../Draggable/DraggableEvent/DraggableEvent.cjs');
require('../Draggable/Plugins/Announcement/Announcement.cjs');
require('../Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.cjs');
require('../Draggable/Sensors/SensorEvent/SensorEvent.cjs');
require('../Draggable/Sensors/TouchSensor/TouchSensor.cjs');
var SortableEvent = require('./SortableEvent/SortableEvent.cjs');

const onDragStart = Symbol('onDragStart');
const onDragOverContainer = Symbol('onDragOverContainer');
const onDragOver = Symbol('onDragOver');
const onDragStop = Symbol('onDragStop');

function onSortableSortedDefaultAnnouncement({
  dragEvent
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'sortable element';
  if (dragEvent.over) {
    const overText = dragEvent.over.textContent.trim() || dragEvent.over.id || 'sortable element';
    const isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;
    if (isFollowing) {
      return `Placed ${sourceText} after ${overText}`;
    } else {
      return `Placed ${sourceText} before ${overText}`;
    }
  } else {

    return `Placed ${sourceText} into a different container`;
  }
}

const defaultAnnouncements = {
  'sortable:sorted': onSortableSortedDefaultAnnouncement
};

class Sortable extends Draggable.default {

  constructor(containers = [], options = {}) {
    super(containers, {
      ...options,
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      }
    });

    this.startIndex = null;

    this.startContainer = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOverContainer] = this[onDragOverContainer].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this.on('drag:start', this[onDragStart]).on('drag:over:container', this[onDragOverContainer]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
  }

  destroy() {
    super.destroy();
    this.off('drag:start', this[onDragStart]).off('drag:over:container', this[onDragOverContainer]).off('drag:over', this[onDragOver]).off('drag:stop', this[onDragStop]);
  }

  index(element) {
    return this.getSortableElementsForContainer(element.parentNode).indexOf(element);
  }

  getSortableElementsForContainer(container) {
    const allSortableElements = container.querySelectorAll(this.options.draggable);
    return [...allSortableElements].filter(childElement => {
      return childElement !== this.originalSource && childElement !== this.mirror && childElement.parentNode === container;
    });
  }

  [onDragStart](event) {
    this.startContainer = event.source.parentNode;
    this.startIndex = this.index(event.source);
    const sortableStartEvent = new SortableEvent.SortableStartEvent({
      dragEvent: event,
      startIndex: this.startIndex,
      startContainer: this.startContainer
    });
    this.trigger(sortableStartEvent);
    if (sortableStartEvent.canceled()) {
      event.cancel();
    }
  }

  [onDragOverContainer](event) {
    if (event.canceled()) {
      return;
    }
    const {
      source,
      over,
      overContainer
    } = event;
    const oldIndex = this.index(source);
    const sortableSortEvent = new SortableEvent.SortableSortEvent({
      dragEvent: event,
      currentIndex: oldIndex,
      source,
      over
    });
    this.trigger(sortableSortEvent);
    if (sortableSortEvent.canceled()) {
      return;
    }
    const children = this.getSortableElementsForContainer(overContainer);
    const moves = move({
      source,
      over,
      overContainer,
      children
    });
    if (!moves) {
      return;
    }
    const {
      oldContainer,
      newContainer
    } = moves;
    const newIndex = this.index(event.source);
    const sortableSortedEvent = new SortableEvent.SortableSortedEvent({
      dragEvent: event,
      oldIndex,
      newIndex,
      oldContainer,
      newContainer
    });
    this.trigger(sortableSortedEvent);
  }

  [onDragOver](event) {
    if (event.over === event.originalSource || event.over === event.source) {
      return;
    }
    const {
      source,
      over,
      overContainer
    } = event;
    const oldIndex = this.index(source);
    const sortableSortEvent = new SortableEvent.SortableSortEvent({
      dragEvent: event,
      currentIndex: oldIndex,
      source,
      over
    });
    this.trigger(sortableSortEvent);
    if (sortableSortEvent.canceled()) {
      return;
    }
    const children = this.getDraggableElementsForContainer(overContainer);
    const moves = move({
      source,
      over,
      overContainer,
      children
    });
    if (!moves) {
      return;
    }
    const {
      oldContainer,
      newContainer
    } = moves;
    const newIndex = this.index(source);
    const sortableSortedEvent = new SortableEvent.SortableSortedEvent({
      dragEvent: event,
      oldIndex,
      newIndex,
      oldContainer,
      newContainer
    });
    this.trigger(sortableSortedEvent);
  }

  [onDragStop](event) {
    const sortableStopEvent = new SortableEvent.SortableStopEvent({
      dragEvent: event,
      oldIndex: this.startIndex,
      newIndex: this.index(event.source),
      oldContainer: this.startContainer,
      newContainer: event.source.parentNode
    });
    this.trigger(sortableStopEvent);
    this.startIndex = null;
    this.startContainer = null;
  }
}
function index(element) {
  return Array.prototype.indexOf.call(element.parentNode.children, element);
}
function move({
  source,
  over,
  overContainer,
  children
}) {
  const emptyOverContainer = !children.length;
  const differentContainer = source.parentNode !== overContainer;
  const sameContainer = over && source.parentNode === over.parentNode;
  if (emptyOverContainer) {
    return moveInsideEmptyContainer(source, overContainer);
  } else if (sameContainer) {
    return moveWithinContainer(source, over);
  } else if (differentContainer) {
    return moveOutsideContainer(source, over, overContainer);
  } else {
    return null;
  }
}
function moveInsideEmptyContainer(source, overContainer) {
  const oldContainer = source.parentNode;
  overContainer.appendChild(source);
  return {
    oldContainer,
    newContainer: overContainer
  };
}
function moveWithinContainer(source, over) {
  const oldIndex = index(source);
  const newIndex = index(over);
  if (oldIndex < newIndex) {
    source.parentNode.insertBefore(source, over.nextElementSibling);
  } else {
    source.parentNode.insertBefore(source, over);
  }
  return {
    oldContainer: source.parentNode,
    newContainer: source.parentNode
  };
}
function moveOutsideContainer(source, over, overContainer) {
  const oldContainer = source.parentNode;
  if (over) {
    over.parentNode.insertBefore(source, over);
  } else {

    overContainer.appendChild(source);
  }
  return {
    oldContainer,
    newContainer: source.parentNode
  };
}

exports.default = Sortable;
