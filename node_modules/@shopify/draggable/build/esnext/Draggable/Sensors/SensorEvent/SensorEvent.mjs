import { AbstractEvent } from '../../../shared/AbstractEvent/AbstractEvent.mjs';

class SensorEvent extends AbstractEvent {

  get originalEvent() {
    return this.data.originalEvent;
  }

  get clientX() {
    return this.data.clientX;
  }

  get clientY() {
    return this.data.clientY;
  }

  get target() {
    return this.data.target;
  }

  get container() {
    return this.data.container;
  }

  get originalSource() {
    return this.data.originalSource;
  }

  get pressure() {
    return this.data.pressure;
  }
}

class DragStartSensorEvent extends SensorEvent {
  static type = 'drag:start';
}

class DragMoveSensorEvent extends SensorEvent {
  static type = 'drag:move';
}

class DragStopSensorEvent extends SensorEvent {
  static type = 'drag:stop';
}

class DragPressureSensorEvent extends SensorEvent {
  static type = 'drag:pressure';
}

export { DragMoveSensorEvent, DragPressureSensorEvent, DragStartSensorEvent, DragStopSensorEvent, SensorEvent };
