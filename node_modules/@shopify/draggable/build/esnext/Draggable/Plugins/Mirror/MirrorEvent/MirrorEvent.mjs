import { AbstractEvent } from '../../../../shared/AbstractEvent/AbstractEvent.mjs';

class MirrorEvent extends AbstractEvent {

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

class MirrorCreateEvent extends MirrorEvent {
  static type = 'mirror:create';
}

class MirrorCreatedEvent extends MirrorEvent {
  static type = 'mirror:created';

  get mirror() {
    return this.data.mirror;
  }
}

class MirrorAttachedEvent extends MirrorEvent {
  static type = 'mirror:attached';

  get mirror() {
    return this.data.mirror;
  }
}

class MirrorMoveEvent extends MirrorEvent {
  static type = 'mirror:move';
  static cancelable = true;

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

class MirrorMovedEvent extends MirrorEvent {
  static type = 'mirror:moved';

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

class MirrorDestroyEvent extends MirrorEvent {
  static type = 'mirror:destroy';
  static cancelable = true;

  get mirror() {
    return this.data.mirror;
  }
}

export { MirrorAttachedEvent, MirrorCreateEvent, MirrorCreatedEvent, MirrorDestroyEvent, MirrorEvent, MirrorMoveEvent, MirrorMovedEvent };
