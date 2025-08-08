'use strict';

class AbstractEvent {

  constructor(data) {

    this._canceled = false;
    this.data = data;
  }

  get type() {
    return this.constructor.type;
  }

  get cancelable() {
    return this.constructor.cancelable;
  }

  cancel() {
    this._canceled = true;
  }

  canceled() {
    return this._canceled;
  }

  clone(data) {
    return new this.constructor({
      ...this.data,
      ...data
    });
  }
}

AbstractEvent.type = 'event';

AbstractEvent.cancelable = false;

exports.AbstractEvent = AbstractEvent;
