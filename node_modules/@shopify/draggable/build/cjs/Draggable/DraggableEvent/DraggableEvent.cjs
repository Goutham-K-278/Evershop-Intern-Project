'use strict';

var AbstractEvent = require('../../shared/AbstractEvent/AbstractEvent.cjs');

class DraggableEvent extends AbstractEvent.AbstractEvent {

  get draggable() {
    return this.data.draggable;
  }
}

DraggableEvent.type = 'draggable';
class DraggableInitializedEvent extends DraggableEvent {}

DraggableInitializedEvent.type = 'draggable:initialize';
class DraggableDestroyEvent extends DraggableEvent {}
DraggableDestroyEvent.type = 'draggable:destroy';

exports.DraggableDestroyEvent = DraggableDestroyEvent;
exports.DraggableEvent = DraggableEvent;
exports.DraggableInitializedEvent = DraggableInitializedEvent;
