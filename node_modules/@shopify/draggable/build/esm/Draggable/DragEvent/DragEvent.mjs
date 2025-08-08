import { AbstractEvent } from '../../shared/AbstractEvent/AbstractEvent.mjs';

class DragEvent extends AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get source() {
    return this.data.source;
  }

  get originalSource() {
    return this.data.originalSource;
  }

  get mirror() {
    return this.data.mirror;
  }

  get sourceContainer() {
    return this.data.sourceContainer;
  }

  get sensorEvent() {
    return this.data.sensorEvent;
  }

  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }
    return null;
  }
}

DragEvent.type = 'drag';
class DragStartEvent extends DragEvent {}

DragStartEvent.type = 'drag:start';
DragStartEvent.cancelable = true;
class DragMoveEvent extends DragEvent {}

DragMoveEvent.type = 'drag:move';

class DragOverEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }

  get over() {
    return this.data.over;
  }
}
DragOverEvent.type = 'drag:over';
DragOverEvent.cancelable = true;
function isDragOverEvent(event) {
  return event.type === DragOverEvent.type;
}

class DragOutEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }

  get over() {
    return this.data.over;
  }
}

DragOutEvent.type = 'drag:out';

class DragOverContainerEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }
}

DragOverContainerEvent.type = 'drag:over:container';

class DragOutContainerEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }
}

DragOutContainerEvent.type = 'drag:out:container';

class DragPressureEvent extends DragEvent {

  get pressure() {
    return this.data.pressure;
  }
}

DragPressureEvent.type = 'drag:pressure';
class DragStopEvent extends DragEvent {}

DragStopEvent.type = 'drag:stop';
DragStopEvent.cancelable = true;
class DragStoppedEvent extends DragEvent {}
DragStoppedEvent.type = 'drag:stopped';

export { DragEvent, DragMoveEvent, DragOutContainerEvent, DragOutEvent, DragOverContainerEvent, DragOverEvent, DragPressureEvent, DragStartEvent, DragStopEvent, DragStoppedEvent, isDragOverEvent };
