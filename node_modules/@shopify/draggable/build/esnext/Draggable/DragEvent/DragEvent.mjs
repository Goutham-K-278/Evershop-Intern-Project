import { AbstractEvent } from '../../shared/AbstractEvent/AbstractEvent.mjs';

class DragEvent extends AbstractEvent {
  static type = 'drag';

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

class DragStartEvent extends DragEvent {
  static type = 'drag:start';
  static cancelable = true;
}

class DragMoveEvent extends DragEvent {
  static type = 'drag:move';
}

class DragOverEvent extends DragEvent {
  static type = 'drag:over';
  static cancelable = true;

  get overContainer() {
    return this.data.overContainer;
  }

  get over() {
    return this.data.over;
  }
}
function isDragOverEvent(event) {
  return event.type === DragOverEvent.type;
}

class DragOutEvent extends DragEvent {
  static type = 'drag:out';

  get overContainer() {
    return this.data.overContainer;
  }

  get over() {
    return this.data.over;
  }
}

class DragOverContainerEvent extends DragEvent {
  static type = 'drag:over:container';

  get overContainer() {
    return this.data.overContainer;
  }
}

class DragOutContainerEvent extends DragEvent {
  static type = 'drag:out:container';

  get overContainer() {
    return this.data.overContainer;
  }
}

class DragPressureEvent extends DragEvent {
  static type = 'drag:pressure';

  get pressure() {
    return this.data.pressure;
  }
}

class DragStopEvent extends DragEvent {
  static type = 'drag:stop';
  static cancelable = true;
}

class DragStoppedEvent extends DragEvent {
  static type = 'drag:stopped';
}

export { DragEvent, DragMoveEvent, DragOutContainerEvent, DragOutEvent, DragOverContainerEvent, DragOverEvent, DragPressureEvent, DragStartEvent, DragStopEvent, DragStoppedEvent, isDragOverEvent };
