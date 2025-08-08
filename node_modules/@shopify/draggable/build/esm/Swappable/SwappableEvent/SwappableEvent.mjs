import { AbstractEvent } from '../../shared/AbstractEvent/AbstractEvent.mjs';

class SwappableEvent extends AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}

SwappableEvent.type = 'swappable';
class SwappableStartEvent extends SwappableEvent {}
SwappableStartEvent.type = 'swappable:start';
SwappableStartEvent.cancelable = true;

class SwappableSwapEvent extends SwappableEvent {

  get over() {
    return this.data.over;
  }

  get overContainer() {
    return this.data.overContainer;
  }
}
SwappableSwapEvent.type = 'swappable:swap';
SwappableSwapEvent.cancelable = true;

class SwappableSwappedEvent extends SwappableEvent {

  get swappedElement() {
    return this.data.swappedElement;
  }
}

SwappableSwappedEvent.type = 'swappable:swapped';
class SwappableStopEvent extends SwappableEvent {}
SwappableStopEvent.type = 'swappable:stop';

export { SwappableEvent, SwappableStartEvent, SwappableStopEvent, SwappableSwapEvent, SwappableSwappedEvent };
