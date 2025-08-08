import { AbstractEvent } from '../../../shared/AbstractEvent/AbstractEvent.mjs';

class CollidableEvent extends AbstractEvent {
  static type = 'collidable';

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}

class CollidableInEvent extends CollidableEvent {
  static type = 'collidable:in';

  get collidingElement() {
    return this.data.collidingElement;
  }
}

class CollidableOutEvent extends CollidableEvent {
  static type = 'collidable:out';

  get collidingElement() {
    return this.data.collidingElement;
  }
}

export { CollidableEvent, CollidableInEvent, CollidableOutEvent };
