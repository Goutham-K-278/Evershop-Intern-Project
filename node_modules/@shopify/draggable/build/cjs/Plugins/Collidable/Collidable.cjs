'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AbstractPlugin = require('../../shared/AbstractPlugin/AbstractPlugin.cjs');
var closest = require('../../shared/utils/closest/closest.cjs');
var CollidableEvent = require('./CollidableEvent/CollidableEvent.cjs');

const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onRequestAnimationFrame = Symbol('onRequestAnimationFrame');

class Collidable extends AbstractPlugin.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.currentlyCollidingElement = null;

    this.lastCollidingElement = null;

    this.currentAnimationFrame = null;
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onRequestAnimationFrame] = this[onRequestAnimationFrame].bind(this);
  }

  attach() {
    this.draggable.on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  detach() {
    this.draggable.off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  getCollidables() {
    const collidables = this.draggable.options.collidables;
    if (typeof collidables === 'string') {
      return Array.prototype.slice.call(document.querySelectorAll(collidables));
    } else if (collidables instanceof NodeList || collidables instanceof Array) {
      return Array.prototype.slice.call(collidables);
    } else if (collidables instanceof HTMLElement) {
      return [collidables];
    } else if (typeof collidables === 'function') {
      return collidables();
    } else {
      return [];
    }
  }

  [onDragMove](event) {
    const target = event.sensorEvent.target;
    this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));
    if (this.currentlyCollidingElement) {
      event.cancel();
    }
    const collidableInEvent = new CollidableEvent.CollidableInEvent({
      dragEvent: event,
      collidingElement: this.currentlyCollidingElement
    });
    const collidableOutEvent = new CollidableEvent.CollidableOutEvent({
      dragEvent: event,
      collidingElement: this.lastCollidingElement
    });
    const enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);
    const leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);
    if (enteringCollidable) {
      if (this.lastCollidingElement) {
        this.draggable.trigger(collidableOutEvent);
      }
      this.draggable.trigger(collidableInEvent);
    } else if (leavingCollidable) {
      this.draggable.trigger(collidableOutEvent);
    }
    this.lastCollidingElement = this.currentlyCollidingElement;
  }

  [onDragStop](event) {
    const lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;
    const collidableOutEvent = new CollidableEvent.CollidableOutEvent({
      dragEvent: event,
      collidingElement: lastCollidingElement
    });
    if (lastCollidingElement) {
      this.draggable.trigger(collidableOutEvent);
    }
    this.lastCollidingElement = null;
    this.currentlyCollidingElement = null;
  }

  [onRequestAnimationFrame](target) {
    return () => {
      const collidables = this.getCollidables();
      this.currentlyCollidingElement = closest.default(target, element => collidables.includes(element));
    };
  }
}

exports.default = Collidable;
