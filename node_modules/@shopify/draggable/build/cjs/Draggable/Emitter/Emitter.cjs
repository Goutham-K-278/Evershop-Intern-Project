'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Emitter {
  constructor() {
    this.callbacks = {};
  }

  on(type, ...callbacks) {
    if (!this.callbacks[type]) {
      this.callbacks[type] = [];
    }
    this.callbacks[type].push(...callbacks);
    return this;
  }

  off(type, callback) {
    if (!this.callbacks[type]) {
      return null;
    }
    const copy = this.callbacks[type].slice(0);
    for (let i = 0; i < copy.length; i++) {
      if (callback === copy[i]) {
        this.callbacks[type].splice(i, 1);
      }
    }
    return this;
  }

  trigger(event) {
    if (!this.callbacks[event.type]) {
      return null;
    }
    const callbacks = [...this.callbacks[event.type]];
    const caughtErrors = [];
    for (let i = callbacks.length - 1; i >= 0; i--) {
      const callback = callbacks[i];
      try {
        callback(event);
      } catch (error) {
        caughtErrors.push(error);
      }
    }
    if (caughtErrors.length) {

      console.error(`Draggable caught errors while triggering '${event.type}'`, caughtErrors);

    }

    return this;
  }
}

exports.default = Emitter;
