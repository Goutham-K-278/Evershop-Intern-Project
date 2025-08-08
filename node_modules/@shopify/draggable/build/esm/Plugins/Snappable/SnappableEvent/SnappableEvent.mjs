import { AbstractEvent } from '../../../shared/AbstractEvent/AbstractEvent.mjs';

class SnapEvent extends AbstractEvent {

  get dragEvent() {
    return this.data.dragEvent;
  }

  get snappable() {
    return this.data.snappable;
  }
}

SnapEvent.type = 'snap';
class SnapInEvent extends SnapEvent {}

SnapInEvent.type = 'snap:in';
SnapInEvent.cancelable = true;
class SnapOutEvent extends SnapEvent {}
SnapOutEvent.type = 'snap:out';
SnapOutEvent.cancelable = true;

export { SnapEvent, SnapInEvent, SnapOutEvent };
