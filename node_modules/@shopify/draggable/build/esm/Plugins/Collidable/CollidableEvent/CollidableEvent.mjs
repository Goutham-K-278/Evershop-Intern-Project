import { AbstractEvent } from '../../../shared/AbstractEvent/AbstractEvent.mjs';

class CollidableEvent extends AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}
CollidableEvent.type = 'collidable';

class CollidableInEvent extends CollidableEvent {

  get collidingElement() {
    return this.data.collidingElement;
  }
}
CollidableInEvent.type = 'collidable:in';

class CollidableOutEvent extends CollidableEvent {

  get collidingElement() {
    return this.data.collidingElement;
  }
}
CollidableOutEvent.type = 'collidable:out';

export { CollidableEvent, CollidableInEvent, CollidableOutEvent };
