import { AbstractEvent } from '../../shared/AbstractEvent/AbstractEvent.mjs';

class DroppableEvent extends AbstractEvent {
  static type = 'droppable';

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}

class DroppableStartEvent extends DroppableEvent {
  static type = 'droppable:start';
  static cancelable = true;

  get dropzone() {
    return this.data.dropzone;
  }
}

class DroppableDroppedEvent extends DroppableEvent {
  static type = 'droppable:dropped';
  static cancelable = true;

  get dropzone() {
    return this.data.dropzone;
  }
}

class DroppableReturnedEvent extends DroppableEvent {
  static type = 'droppable:returned';
  static cancelable = true;

  get dropzone() {
    return this.data.dropzone;
  }
}

class DroppableStopEvent extends DroppableEvent {
  static type = 'droppable:stop';
  static cancelable = true;

  get dropzone() {
    return this.data.dropzone;
  }
}

export { DroppableDroppedEvent, DroppableEvent, DroppableReturnedEvent, DroppableStartEvent, DroppableStopEvent };
