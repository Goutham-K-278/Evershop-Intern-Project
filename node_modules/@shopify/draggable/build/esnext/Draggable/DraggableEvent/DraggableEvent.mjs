import { AbstractEvent } from '../../shared/AbstractEvent/AbstractEvent.mjs';

class DraggableEvent extends AbstractEvent {
  static type = 'draggable';

  get draggable() {
    return this.data.draggable;
  }
}

class DraggableInitializedEvent extends DraggableEvent {
  static type = 'draggable:initialize';
}

class DraggableDestroyEvent extends DraggableEvent {
  static type = 'draggable:destroy';
}

export { DraggableDestroyEvent, DraggableEvent, DraggableInitializedEvent };
