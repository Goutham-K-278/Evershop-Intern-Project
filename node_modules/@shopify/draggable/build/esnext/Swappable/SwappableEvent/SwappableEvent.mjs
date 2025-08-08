import { AbstractEvent } from '../../shared/AbstractEvent/AbstractEvent.mjs';

class SwappableEvent extends AbstractEvent {
  static type = 'swappable';

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}

class SwappableStartEvent extends SwappableEvent {
  static type = 'swappable:start';
  static cancelable = true;
}

class SwappableSwapEvent extends SwappableEvent {
  static type = 'swappable:swap';
  static cancelable = true;

  get over() {
    return this.data.over;
  }

  get overContainer() {
    return this.data.overContainer;
  }
}

class SwappableSwappedEvent extends SwappableEvent {
  static type = 'swappable:swapped';

  get swappedElement() {
    return this.data.swappedElement;
  }
}

class SwappableStopEvent extends SwappableEvent {
  static type = 'swappable:stop';
}

export { SwappableEvent, SwappableStartEvent, SwappableStopEvent, SwappableSwapEvent, SwappableSwappedEvent };
