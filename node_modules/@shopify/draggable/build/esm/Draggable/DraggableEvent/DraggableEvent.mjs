import { AbstractEvent } from '../../shared/AbstractEvent/AbstractEvent.mjs';

class DraggableEvent extends AbstractEvent {

  get draggable() {
    return this.data.draggable;
  }
}

DraggableEvent.type = 'draggable';
class DraggableInitializedEvent extends DraggableEvent {}

DraggableInitializedEvent.type = 'draggable:initialize';
class DraggableDestroyEvent extends DraggableEvent {}
DraggableDestroyEvent.type = 'draggable:destroy';

export { DraggableDestroyEvent, DraggableEvent, DraggableInitializedEvent };
