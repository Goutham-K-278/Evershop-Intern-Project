const defaultDelay = {
  mouse: 0,
  drag: 0,
  touch: 100
};

class Sensor {

  constructor(containers = [], options = {}) {

    this.containers = [...containers];

    this.options = {
      ...options
    };

    this.dragging = false;

    this.currentContainer = null;

    this.originalSource = null;

    this.startEvent = null;

    this.delay = calcDelay(options.delay);
  }

  attach() {
    return this;
  }

  detach() {
    return this;
  }

  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
  }

  removeContainer(...containers) {
    this.containers = this.containers.filter(container => !containers.includes(container));
  }

  trigger(element, sensorEvent) {
    const event = document.createEvent('Event');
    event.detail = sensorEvent;
    event.initEvent(sensorEvent.type, true, true);
    element.dispatchEvent(event);
    this.lastEvent = sensorEvent;
    return sensorEvent;
  }
}

function calcDelay(optionsDelay) {
  const delay = {};
  if (optionsDelay === undefined) {
    return {
      ...defaultDelay
    };
  }
  if (typeof optionsDelay === 'number') {
    for (const key in defaultDelay) {
      if (Object.prototype.hasOwnProperty.call(defaultDelay, key)) {
        delay[key] = optionsDelay;
      }
    }
    return delay;
  }
  for (const key in defaultDelay) {
    if (Object.prototype.hasOwnProperty.call(defaultDelay, key)) {
      if (optionsDelay[key] === undefined) {
        delay[key] = defaultDelay[key];
      } else {
        delay[key] = optionsDelay[key];
      }
    }
  }
  return delay;
}

export { Sensor as default };
