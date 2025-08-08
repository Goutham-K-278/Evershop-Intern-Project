import closest from '../../../shared/utils/closest/closest.mjs';
import Sensor from '../Sensor/Sensor.mjs';
import { DragStartSensorEvent, DragMoveSensorEvent, DragStopSensorEvent } from '../SensorEvent/SensorEvent.mjs';

const onMouseDown = Symbol('onMouseDown');
const onMouseUp = Symbol('onMouseUp');
const onDragStart = Symbol('onDragStart');
const onDragOver = Symbol('onDragOver');
const onDragEnd = Symbol('onDragEnd');
const onDrop = Symbol('onDrop');
const reset = Symbol('reset');

class DragSensor extends Sensor {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.mouseDownTimeout = null;

    this.draggableElement = null;

    this.nativeDraggableElement = null;
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragEnd] = this[onDragEnd].bind(this);
    this[onDrop] = this[onDrop].bind(this);
  }

  attach() {
    document.addEventListener('mousedown', this[onMouseDown], true);
  }

  detach() {
    document.removeEventListener('mousedown', this[onMouseDown], true);
  }

  [onDragStart](event) {

    event.dataTransfer.setData('text', '');
    event.dataTransfer.effectAllowed = this.options.type;
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const originalSource = this.draggableElement;
    if (!originalSource) {
      return;
    }
    const dragStartEvent = new DragStartSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      originalSource,
      container: this.currentContainer,
      originalEvent: event
    });

    setTimeout(() => {
      this.trigger(this.currentContainer, dragStartEvent);
      if (dragStartEvent.canceled()) {
        this.dragging = false;
      } else {
        this.dragging = true;
      }
    }, 0);
  }

  [onDragOver](event) {
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = this.currentContainer;
    const dragMoveEvent = new DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });
    this.trigger(container, dragMoveEvent);
    if (!dragMoveEvent.canceled()) {
      event.preventDefault();
      event.dataTransfer.dropEffect = this.options.type;
    }
  }

  [onDragEnd](event) {
    if (!this.dragging) {
      return;
    }
    document.removeEventListener('mouseup', this[onMouseUp], true);
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = this.currentContainer;
    const dragStopEvent = new DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });
    this.trigger(container, dragStopEvent);
    this.dragging = false;
    this.startEvent = null;
    this[reset]();
  }

  [onDrop](event) {
    event.preventDefault();
  }

  [onMouseDown](event) {

    if (event.target && (event.target.form || event.target.contenteditable)) {
      return;
    }
    const target = event.target;
    this.currentContainer = closest(target, this.containers);
    if (!this.currentContainer) {
      return;
    }
    if (this.options.handle && target && !closest(target, this.options.handle)) {
      return;
    }
    const originalSource = closest(target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const nativeDraggableElement = closest(event.target, element => element.draggable);
    if (nativeDraggableElement) {
      nativeDraggableElement.draggable = false;
      this.nativeDraggableElement = nativeDraggableElement;
    }
    document.addEventListener('mouseup', this[onMouseUp], true);
    document.addEventListener('dragstart', this[onDragStart], false);
    document.addEventListener('dragover', this[onDragOver], false);
    document.addEventListener('dragend', this[onDragEnd], false);
    document.addEventListener('drop', this[onDrop], false);
    this.startEvent = event;
    this.mouseDownTimeout = setTimeout(() => {
      originalSource.draggable = true;
      this.draggableElement = originalSource;
    }, this.delay.drag);
  }

  [onMouseUp]() {
    this[reset]();
  }

  [reset]() {
    clearTimeout(this.mouseDownTimeout);
    document.removeEventListener('mouseup', this[onMouseUp], true);
    document.removeEventListener('dragstart', this[onDragStart], false);
    document.removeEventListener('dragover', this[onDragOver], false);
    document.removeEventListener('dragend', this[onDragEnd], false);
    document.removeEventListener('drop', this[onDrop], false);
    if (this.nativeDraggableElement) {
      this.nativeDraggableElement.draggable = true;
      this.nativeDraggableElement = null;
    }
    if (this.draggableElement) {
      this.draggableElement.draggable = false;
      this.draggableElement = null;
    }
  }
}

export { DragSensor as default };
