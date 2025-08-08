import closest from '../../../shared/utils/closest/closest.mjs';
import distance from '../../../shared/utils/distance/distance.mjs';
import Sensor from '../Sensor/Sensor.mjs';
import { DragStartSensorEvent, DragMoveSensorEvent, DragStopSensorEvent } from '../SensorEvent/SensorEvent.mjs';

const onContextMenuWhileDragging = Symbol('onContextMenuWhileDragging');
const onMouseDown = Symbol('onMouseDown');
const onMouseMove = Symbol('onMouseMove');
const onMouseUp = Symbol('onMouseUp');
const startDrag = Symbol('startDrag');
const onDistanceChange = Symbol('onDistanceChange');

class MouseSensor extends Sensor {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.mouseDownTimeout = null;

    this.pageX = null;

    this.pageY = null;
    this[onContextMenuWhileDragging] = this[onContextMenuWhileDragging].bind(this);
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseMove] = this[onMouseMove].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
    this[startDrag] = this[startDrag].bind(this);
    this[onDistanceChange] = this[onDistanceChange].bind(this);
  }

  attach() {
    document.addEventListener('mousedown', this[onMouseDown], true);
  }

  detach() {
    document.removeEventListener('mousedown', this[onMouseDown], true);
  }

  [onMouseDown](event) {
    if (event.button !== 0 || event.ctrlKey || event.metaKey) {
      return;
    }
    const container = closest(event.target, this.containers);
    if (!container) {
      return;
    }
    if (this.options.handle && event.target && !closest(event.target, this.options.handle)) {
      return;
    }
    const originalSource = closest(event.target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const {
      delay
    } = this;
    const {
      pageX,
      pageY
    } = event;
    Object.assign(this, {
      pageX,
      pageY
    });
    this.onMouseDownAt = Date.now();
    this.startEvent = event;
    this.currentContainer = container;
    this.originalSource = originalSource;
    document.addEventListener('mouseup', this[onMouseUp]);
    document.addEventListener('dragstart', preventNativeDragStart);
    document.addEventListener('mousemove', this[onDistanceChange]);
    this.mouseDownTimeout = window.setTimeout(() => {
      this[onDistanceChange]({
        pageX: this.pageX,
        pageY: this.pageY
      });
    }, delay.mouse);
  }

  [startDrag]() {
    const startEvent = this.startEvent;
    const container = this.currentContainer;
    const originalSource = this.originalSource;
    const dragStartEvent = new DragStartSensorEvent({
      clientX: startEvent.clientX,
      clientY: startEvent.clientY,
      target: startEvent.target,
      container,
      originalSource,
      originalEvent: startEvent
    });
    this.trigger(this.currentContainer, dragStartEvent);
    this.dragging = !dragStartEvent.canceled();
    if (this.dragging) {
      document.addEventListener('contextmenu', this[onContextMenuWhileDragging], true);
      document.addEventListener('mousemove', this[onMouseMove]);
    }
  }

  [onDistanceChange](event) {
    const {
      pageX,
      pageY
    } = event;
    const {
      distance: distance$1
    } = this.options;
    const {
      startEvent,
      delay
    } = this;
    Object.assign(this, {
      pageX,
      pageY
    });
    if (!this.currentContainer) {
      return;
    }
    const timeElapsed = Date.now() - this.onMouseDownAt;
    const distanceTravelled = distance(startEvent.pageX, startEvent.pageY, pageX, pageY) || 0;
    clearTimeout(this.mouseDownTimeout);
    if (timeElapsed < delay.mouse) {

      document.removeEventListener('mousemove', this[onDistanceChange]);
    } else if (distanceTravelled >= distance$1) {
      document.removeEventListener('mousemove', this[onDistanceChange]);
      this[startDrag]();
    }
  }

  [onMouseMove](event) {
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const dragMoveEvent = new DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragMoveEvent);
  }

  [onMouseUp](event) {
    clearTimeout(this.mouseDownTimeout);
    if (event.button !== 0) {
      return;
    }
    document.removeEventListener('mouseup', this[onMouseUp]);
    document.removeEventListener('dragstart', preventNativeDragStart);
    document.removeEventListener('mousemove', this[onDistanceChange]);
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const dragStopEvent = new DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragStopEvent);
    document.removeEventListener('contextmenu', this[onContextMenuWhileDragging], true);
    document.removeEventListener('mousemove', this[onMouseMove]);
    this.currentContainer = null;
    this.dragging = false;
    this.startEvent = null;
  }

  [onContextMenuWhileDragging](event) {
    event.preventDefault();
  }
}
function preventNativeDragStart(event) {
  event.preventDefault();
}

export { MouseSensor as default };
