import { AbstractEvent } from '../../../shared/AbstractEvent/AbstractEvent.mjs';

class SnapEvent extends AbstractEvent {
  static type = 'snap';

  get dragEvent() {
    return this.data.dragEvent;
  }

  get snappable() {
    return this.data.snappable;
  }
}

class SnapInEvent extends SnapEvent {
  static type = 'snap:in';
  static cancelable = true;
}

class SnapOutEvent extends SnapEvent {
  static type = 'snap:out';
  static cancelable = true;
}

export { SnapEvent, SnapInEvent, SnapOutEvent };
