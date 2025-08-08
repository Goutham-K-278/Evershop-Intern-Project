import closest from '../../../shared/utils/closest/closest.mjs';
import distance from '../../../shared/utils/distance/distance.mjs';
import touchCoords from '../../../shared/utils/touchCoords/touchCoords.mjs';
import Sensor from '../Sensor/Sensor.mjs';
import { DragStartSensorEvent, DragMoveSensorEvent, DragStopSensorEvent } from '../SensorEvent/SensorEvent.mjs';

const onTouchStart = Symbol('onTouchStart');
const onTouchEnd = Symbol('onTouchEnd');
const onTouchMove = Symbol('onTouchMove');
const startDrag = Symbol('startDrag');
const onDistanceChange = Symbol('onDistanceChange');

let preventScrolling = false;

window.addEventListener('touchmove', event => {
  if (!preventScrolling) {
    return;
  }

  event.preventDefault();
}, {
  passive: false
});

class TouchSensor extends Sensor {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.currentScrollableParent = null;

    this.tapTimeout = null;

    this.touchMoved = false;

    this.pageX = null;

    this.pageY = null;
    this[onTouchStart] = this[onTouchStart].bind(this);
    this[onTouchEnd] = this[onTouchEnd].bind(this);
    this[onTouchMove] = this[onTouchMove].bind(this);
    this[startDrag] = this[startDrag].bind(this);
    this[onDistanceChange] = this[onDistanceChange].bind(this);
  }

  attach() {
    document.addEventListener('touchstart', this[onTouchStart]);
  }

  detach() {
    document.removeEventListener('touchstart', this[onTouchStart]);
  }

  [onTouchStart](event) {
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
      distance = 0
    } = this.options;
    const {
      delay
    } = this;
    const {
      pageX,
      pageY
    } = touchCoords(event);
    Object.assign(this, {
      pageX,
      pageY
    });
    this.onTouchStartAt = Date.now();
    this.startEvent = event;
    this.currentContainer = container;
    this.originalSource = originalSource;
    document.addEventListener('touchend', this[onTouchEnd]);
    document.addEventListener('touchcancel', this[onTouchEnd]);
    document.addEventListener('touchmove', this[onDistanceChange]);
    container.addEventListener('contextmenu', onContextMenu);
    if (distance) {
      preventScrolling = true;
    }
    this.tapTimeout = window.setTimeout(() => {
      this[onDistanceChange]({
        touches: [{
          pageX: this.pageX,
          pageY: this.pageY
        }]
      });
    }, delay.touch);
  }

  [startDrag]() {
    const startEvent = this.startEvent;
    const container = this.currentContainer;
    const touch = touchCoords(startEvent);
    const originalSource = this.originalSource;
    const dragStartEvent = new DragStartSensorEvent({
      clientX: touch.pageX,
      clientY: touch.pageY,
      target: startEvent.target,
      container,
      originalSource,
      originalEvent: startEvent
    });
    this.trigger(this.currentContainer, dragStartEvent);
    this.dragging = !dragStartEvent.canceled();
    if (this.dragging) {
      document.addEventListener('touchmove', this[onTouchMove]);
    }
    preventScrolling = this.dragging;
  }

  [onDistanceChange](event) {
    const {
      distance: distance$1
    } = this.options;
    const {
      startEvent,
      delay
    } = this;
    const start = touchCoords(startEvent);
    const current = touchCoords(event);
    const timeElapsed = Date.now() - this.onTouchStartAt;
    const distanceTravelled = distance(start.pageX, start.pageY, current.pageX, current.pageY);
    Object.assign(this, current);
    clearTimeout(this.tapTimeout);
    if (timeElapsed < delay.touch) {

      document.removeEventListener('touchmove', this[onDistanceChange]);
    } else if (distanceTravelled >= distance$1) {
      document.removeEventListener('touchmove', this[onDistanceChange]);
      this[startDrag]();
    }
  }

  [onTouchMove](event) {
    if (!this.dragging) {
      return;
    }
    const {
      pageX,
      pageY
    } = touchCoords(event);
    const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
    const dragMoveEvent = new DragMoveSensorEvent({
      clientX: pageX,
      clientY: pageY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragMoveEvent);
  }

  [onTouchEnd](event) {
    clearTimeout(this.tapTimeout);
    preventScrolling = false;
    document.removeEventListener('touchend', this[onTouchEnd]);
    document.removeEventListener('touchcancel', this[onTouchEnd]);
    document.removeEventListener('touchmove', this[onDistanceChange]);
    if (this.currentContainer) {
      this.currentContainer.removeEventListener('contextmenu', onContextMenu);
    }
    if (!this.dragging) {
      return;
    }
    document.removeEventListener('touchmove', this[onTouchMove]);
    const {
      pageX,
      pageY
    } = touchCoords(event);
    const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
    event.preventDefault();
    const dragStopEvent = new DragStopSensorEvent({
      clientX: pageX,
      clientY: pageY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragStopEvent);
    this.currentContainer = null;
    this.dragging = false;
    this.startEvent = null;
  }
}
function onContextMenu(event) {
  event.preventDefault();
  event.stopPropagation();
}

export { TouchSensor as default };
