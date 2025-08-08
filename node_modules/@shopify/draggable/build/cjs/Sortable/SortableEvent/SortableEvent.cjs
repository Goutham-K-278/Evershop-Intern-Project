'use strict';

var AbstractEvent = require('../../shared/AbstractEvent/AbstractEvent.cjs');

class SortableEvent extends AbstractEvent.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}
SortableEvent.type = 'sortable';

class SortableStartEvent extends SortableEvent {

  get startIndex() {
    return this.data.startIndex;
  }

  get startContainer() {
    return this.data.startContainer;
  }
}
SortableStartEvent.type = 'sortable:start';
SortableStartEvent.cancelable = true;

class SortableSortEvent extends SortableEvent {

  get currentIndex() {
    return this.data.currentIndex;
  }

  get over() {
    return this.data.over;
  }

  get overContainer() {
    return this.data.dragEvent.overContainer;
  }
}
SortableSortEvent.type = 'sortable:sort';
SortableSortEvent.cancelable = true;

class SortableSortedEvent extends SortableEvent {

  get oldIndex() {
    return this.data.oldIndex;
  }

  get newIndex() {
    return this.data.newIndex;
  }

  get oldContainer() {
    return this.data.oldContainer;
  }

  get newContainer() {
    return this.data.newContainer;
  }
}
SortableSortedEvent.type = 'sortable:sorted';

class SortableStopEvent extends SortableEvent {

  get oldIndex() {
    return this.data.oldIndex;
  }

  get newIndex() {
    return this.data.newIndex;
  }

  get oldContainer() {
    return this.data.oldContainer;
  }

  get newContainer() {
    return this.data.newContainer;
  }
}
SortableStopEvent.type = 'sortable:stop';

exports.SortableEvent = SortableEvent;
exports.SortableSortEvent = SortableSortEvent;
exports.SortableSortedEvent = SortableSortedEvent;
exports.SortableStartEvent = SortableStartEvent;
exports.SortableStopEvent = SortableStopEvent;
