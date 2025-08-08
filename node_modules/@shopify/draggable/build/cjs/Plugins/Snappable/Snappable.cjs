'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AbstractPlugin = require('../../shared/AbstractPlugin/AbstractPlugin.cjs');
var SnappableEvent = require('./SnappableEvent/SnappableEvent.cjs');

const onDragStart = Symbol('onDragStart');
const onDragStop = Symbol('onDragStop');
const onDragOver = Symbol('onDragOver');
const onDragOut = Symbol('onDragOut');
const onMirrorCreated = Symbol('onMirrorCreated');
const onMirrorDestroy = Symbol('onMirrorDestroy');

class Snappable extends AbstractPlugin.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.firstSource = null;

    this.mirror = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragOut] = this[onDragOut].bind(this);
    this[onMirrorCreated] = this[onMirrorCreated].bind(this);
    this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);
  }

  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:stop', this[onDragStop]).on('drag:over', this[onDragOver]).on('drag:out', this[onDragOut]).on('droppable:over', this[onDragOver]).on('droppable:out', this[onDragOut]).on('mirror:created', this[onMirrorCreated]).on('mirror:destroy', this[onMirrorDestroy]);
  }

  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:stop', this[onDragStop]).off('drag:over', this[onDragOver]).off('drag:out', this[onDragOut]).off('droppable:over', this[onDragOver]).off('droppable:out', this[onDragOut]).off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]);
  }

  [onDragStart](event) {
    if (event.canceled()) {
      return;
    }
    this.firstSource = event.source;
  }

  [onDragStop]() {
    this.firstSource = null;
  }

  [onDragOver](event) {
    if (event.canceled()) {
      return;
    }
    const source = event.source || event.dragEvent.source;
    if (source === this.firstSource) {
      this.firstSource = null;
      return;
    }
    const snapInEvent = new SnappableEvent.SnapInEvent({
      dragEvent: event,
      snappable: event.over || event.droppable
    });
    this.draggable.trigger(snapInEvent);
    if (snapInEvent.canceled()) {
      return;
    }
    if (this.mirror) {
      this.mirror.style.display = 'none';
    }
    source.classList.remove(...this.draggable.getClassNamesFor('source:dragging'));
    source.classList.add(...this.draggable.getClassNamesFor('source:placed'));

    setTimeout(() => {
      source.classList.remove(...this.draggable.getClassNamesFor('source:placed'));
    }, this.draggable.options.placedTimeout);
  }

  [onDragOut](event) {
    if (event.canceled()) {
      return;
    }
    const source = event.source || event.dragEvent.source;
    const snapOutEvent = new SnappableEvent.SnapOutEvent({
      dragEvent: event,
      snappable: event.over || event.droppable
    });
    this.draggable.trigger(snapOutEvent);
    if (snapOutEvent.canceled()) {
      return;
    }
    if (this.mirror) {
      this.mirror.style.display = '';
    }
    source.classList.add(...this.draggable.getClassNamesFor('source:dragging'));
  }

  [onMirrorCreated]({
    mirror
  }) {
    this.mirror = mirror;
  }

  [onMirrorDestroy]() {
    this.mirror = null;
  }
}

exports.default = Snappable;
