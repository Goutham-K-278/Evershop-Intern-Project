import { AbstractEvent } from '../../shared/AbstractEvent/AbstractEvent.mjs';

class DroppableEvent extends AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}
DroppableEvent.type = 'droppable';

class DroppableStartEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableStartEvent.type = 'droppable:start';
DroppableStartEvent.cancelable = true;

class DroppableDroppedEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableDroppedEvent.type = 'droppable:dropped';
DroppableDroppedEvent.cancelable = true;

class DroppableReturnedEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableReturnedEvent.type = 'droppable:returned';
DroppableReturnedEvent.cancelable = true;

class DroppableStopEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableStopEvent.type = 'droppable:stop';
DroppableStopEvent.cancelable = true;

export { DroppableDroppedEvent, DroppableEvent, DroppableReturnedEvent, DroppableStartEvent, DroppableStopEvent };
