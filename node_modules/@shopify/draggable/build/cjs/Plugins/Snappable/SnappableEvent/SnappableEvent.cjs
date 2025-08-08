'use strict';

var AbstractEvent = require('../../../shared/AbstractEvent/AbstractEvent.cjs');

class SnapEvent extends AbstractEvent.AbstractEvent {

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

exports.SnapEvent = SnapEvent;
exports.SnapInEvent = SnapInEvent;
exports.SnapOutEvent = SnapOutEvent;
