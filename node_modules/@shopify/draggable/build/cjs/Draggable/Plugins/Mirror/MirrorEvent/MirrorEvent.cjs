'use strict';

var AbstractEvent = require('../../../../shared/AbstractEvent/AbstractEvent.cjs');

class MirrorEvent extends AbstractEvent.AbstractEvent {

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

  get sourceContainer() {
    return this.data.sourceContainer;
  }

  get sensorEvent() {
    return this.data.sensorEvent;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }

  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }
    return null;
  }
}

class MirrorCreateEvent extends MirrorEvent {}
MirrorCreateEvent.type = 'mirror:create';

class MirrorCreatedEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }
}
MirrorCreatedEvent.type = 'mirror:created';

class MirrorAttachedEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }
}
MirrorAttachedEvent.type = 'mirror:attached';

class MirrorMoveEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }

  get passedThreshX() {
    return this.data.passedThreshX;
  }

  get passedThreshY() {
    return this.data.passedThreshY;
  }
}
MirrorMoveEvent.type = 'mirror:move';
MirrorMoveEvent.cancelable = true;

class MirrorMovedEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }

  get passedThreshX() {
    return this.data.passedThreshX;
  }

  get passedThreshY() {
    return this.data.passedThreshY;
  }
}
MirrorMovedEvent.type = 'mirror:moved';

class MirrorDestroyEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }
}
MirrorDestroyEvent.type = 'mirror:destroy';
MirrorDestroyEvent.cancelable = true;

exports.MirrorAttachedEvent = MirrorAttachedEvent;
exports.MirrorCreateEvent = MirrorCreateEvent;
exports.MirrorCreatedEvent = MirrorCreatedEvent;
exports.MirrorDestroyEvent = MirrorDestroyEvent;
exports.MirrorEvent = MirrorEvent;
exports.MirrorMoveEvent = MirrorMoveEvent;
exports.MirrorMovedEvent = MirrorMovedEvent;
