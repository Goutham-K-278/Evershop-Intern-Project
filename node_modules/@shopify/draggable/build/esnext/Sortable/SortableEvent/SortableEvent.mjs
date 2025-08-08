import { AbstractEvent } from '../../shared/AbstractEvent/AbstractEvent.mjs';

class SortableEvent extends AbstractEvent {
  static type = 'sortable';

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}

class SortableStartEvent extends SortableEvent {
  static type = 'sortable:start';
  static cancelable = true;

  get startIndex() {
    return this.data.startIndex;
  }

  get startContainer() {
    return this.data.startContainer;
  }
}

class SortableSortEvent extends SortableEvent {
  static type = 'sortable:sort';
  static cancelable = true;

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

class SortableSortedEvent extends SortableEvent {
  static type = 'sortable:sorted';

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

class SortableStopEvent extends SortableEvent {
  static type = 'sortable:stop';

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

export { SortableEvent, SortableSortEvent, SortableSortedEvent, SortableStartEvent, SortableStopEvent };
