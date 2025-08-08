'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var closest = require('../../../shared/utils/closest/closest.cjs');
var Sensor = require('../Sensor/Sensor.cjs');
var SensorEvent = require('../SensorEvent/SensorEvent.cjs');

const onMouseForceWillBegin = Symbol('onMouseForceWillBegin');
const onMouseForceDown = Symbol('onMouseForceDown');
const onMouseDown = Symbol('onMouseDown');
const onMouseForceChange = Symbol('onMouseForceChange');
const onMouseMove = Symbol('onMouseMove');
const onMouseUp = Symbol('onMouseUp');
const onMouseForceGlobalChange = Symbol('onMouseForceGlobalChange');

class ForceTouchSensor extends Sensor.default {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.mightDrag = false;
    this[onMouseForceWillBegin] = this[onMouseForceWillBegin].bind(this);
    this[onMouseForceDown] = this[onMouseForceDown].bind(this);
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseForceChange] = this[onMouseForceChange].bind(this);
    this[onMouseMove] = this[onMouseMove].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
  }

  attach() {
    for (const container of this.containers) {
      container.addEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
      container.addEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
      container.addEventListener('mousedown', this[onMouseDown], true);
      container.addEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
    }
    document.addEventListener('mousemove', this[onMouseMove]);
    document.addEventListener('mouseup', this[onMouseUp]);
  }

  detach() {
    for (const container of this.containers) {
      container.removeEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
      container.removeEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
      container.removeEventListener('mousedown', this[onMouseDown], true);
      container.removeEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
    }
    document.removeEventListener('mousemove', this[onMouseMove]);
    document.removeEventListener('mouseup', this[onMouseUp]);
  }

  [onMouseForceWillBegin](event) {
    event.preventDefault();
    this.mightDrag = true;
  }

  [onMouseForceDown](event) {
    if (this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = event.currentTarget;
    if (this.options.handle && target && !closest.default(target, this.options.handle)) {
      return;
    }
    const originalSource = closest.default(target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const dragStartEvent = new SensorEvent.DragStartSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalSource,
      originalEvent: event
    });
    this.trigger(container, dragStartEvent);
    this.currentContainer = container;
    this.dragging = !dragStartEvent.canceled();
    this.mightDrag = false;
  }

  [onMouseUp](event) {
    if (!this.dragging) {
      return;
    }
    const dragStopEvent = new SensorEvent.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target: null,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragStopEvent);
    this.currentContainer = null;
    this.dragging = false;
    this.mightDrag = false;
  }

  [onMouseDown](event) {
    if (!this.mightDrag) {
      return;
    }

    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
  }

  [onMouseMove](event) {
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const dragMoveEvent = new SensorEvent.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragMoveEvent);
  }

  [onMouseForceChange](event) {
    if (this.dragging) {
      return;
    }
    const target = event.target;
    const container = event.currentTarget;
    const dragPressureEvent = new SensorEvent.DragPressureSensorEvent({
      pressure: event.webkitForce,
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });
    this.trigger(container, dragPressureEvent);
  }

  [onMouseForceGlobalChange](event) {
    if (!this.dragging) {
      return;
    }
    const target = event.target;
    const dragPressureEvent = new SensorEvent.DragPressureSensorEvent({
      pressure: event.webkitForce,
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragPressureEvent);
  }
}

exports.default = ForceTouchSensor;
