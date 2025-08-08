import closest from '../shared/utils/closest/closest.mjs';
import Announcement from './Plugins/Announcement/Announcement.mjs';
import Focusable from './Plugins/Focusable/Focusable.mjs';
import Mirror from './Plugins/Mirror/Mirror.mjs';
import Scrollable from './Plugins/Scrollable/Scrollable.mjs';
import Emitter from './Emitter/Emitter.mjs';
import MouseSensor from './Sensors/MouseSensor/MouseSensor.mjs';
import TouchSensor from './Sensors/TouchSensor/TouchSensor.mjs';
import { DraggableInitializedEvent, DraggableDestroyEvent } from './DraggableEvent/DraggableEvent.mjs';
import { DragStartEvent, DragMoveEvent, DragOutEvent, DragOutContainerEvent, DragOverContainerEvent, DragOverEvent, DragStopEvent, DragStoppedEvent, DragPressureEvent } from './DragEvent/DragEvent.mjs';

const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onDragPressure = Symbol('onDragPressure');
const dragStop = Symbol('dragStop');

const defaultAnnouncements = {
  'drag:start': event => `Picked up ${event.source.textContent.trim() || event.source.id || 'draggable element'}`,
  'drag:stop': event => `Released ${event.source.textContent.trim() || event.source.id || 'draggable element'}`
};
const defaultClasses = {
  'container:dragging': 'draggable-container--is-dragging',
  'source:dragging': 'draggable-source--is-dragging',
  'source:placed': 'draggable-source--placed',
  'container:placed': 'draggable-container--placed',
  'body:dragging': 'draggable--is-dragging',
  'draggable:over': 'draggable--over',
  'container:over': 'draggable-container--over',
  'source:original': 'draggable--original',
  mirror: 'draggable-mirror'
};
const defaultOptions = {
  draggable: '.draggable-source',
  handle: null,
  delay: {},
  distance: 0,
  placedTimeout: 800,
  plugins: [],
  sensors: [],
  exclude: {
    plugins: [],
    sensors: []
  }
};

class Draggable {

  static Plugins = {
    Announcement,
    Focusable,
    Mirror,
    Scrollable
  };

  static Sensors = {
    MouseSensor,
    TouchSensor
  };

  constructor(containers = [document.body], options = {}) {

    if (containers instanceof NodeList || containers instanceof Array) {
      this.containers = [...containers];
    } else if (containers instanceof HTMLElement) {
      this.containers = [containers];
    } else {
      throw new Error('Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`');
    }
    this.options = {
      ...defaultOptions,
      ...options,
      classes: {
        ...defaultClasses,
        ...(options.classes || {})
      },
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      },
      exclude: {
        plugins: options.exclude && options.exclude.plugins || [],
        sensors: options.exclude && options.exclude.sensors || []
      }
    };

    this.emitter = new Emitter();

    this.dragging = false;

    this.plugins = [];

    this.sensors = [];
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onDragPressure] = this[onDragPressure].bind(this);
    this[dragStop] = this[dragStop].bind(this);
    document.addEventListener('drag:start', this[onDragStart], true);
    document.addEventListener('drag:move', this[onDragMove], true);
    document.addEventListener('drag:stop', this[onDragStop], true);
    document.addEventListener('drag:pressure', this[onDragPressure], true);
    const defaultPlugins = Object.values(Draggable.Plugins).filter(Plugin => !this.options.exclude.plugins.includes(Plugin));
    const defaultSensors = Object.values(Draggable.Sensors).filter(sensor => !this.options.exclude.sensors.includes(sensor));
    this.addPlugin(...[...defaultPlugins, ...this.options.plugins]);
    this.addSensor(...[...defaultSensors, ...this.options.sensors]);
    const draggableInitializedEvent = new DraggableInitializedEvent({
      draggable: this
    });
    this.on('mirror:created', ({
      mirror
    }) => this.mirror = mirror);
    this.on('mirror:destroy', () => this.mirror = null);
    this.trigger(draggableInitializedEvent);
  }

  destroy() {
    document.removeEventListener('drag:start', this[onDragStart], true);
    document.removeEventListener('drag:move', this[onDragMove], true);
    document.removeEventListener('drag:stop', this[onDragStop], true);
    document.removeEventListener('drag:pressure', this[onDragPressure], true);
    const draggableDestroyEvent = new DraggableDestroyEvent({
      draggable: this
    });
    this.trigger(draggableDestroyEvent);
    this.removePlugin(...this.plugins.map(plugin => plugin.constructor));
    this.removeSensor(...this.sensors.map(sensor => sensor.constructor));
  }

  addPlugin(...plugins) {
    const activePlugins = plugins.map(Plugin => new Plugin(this));
    activePlugins.forEach(plugin => plugin.attach());
    this.plugins = [...this.plugins, ...activePlugins];
    return this;
  }

  removePlugin(...plugins) {
    const removedPlugins = this.plugins.filter(plugin => plugins.includes(plugin.constructor));
    removedPlugins.forEach(plugin => plugin.detach());
    this.plugins = this.plugins.filter(plugin => !plugins.includes(plugin.constructor));
    return this;
  }

  addSensor(...sensors) {
    const activeSensors = sensors.map(Sensor => new Sensor(this.containers, this.options));
    activeSensors.forEach(sensor => sensor.attach());
    this.sensors = [...this.sensors, ...activeSensors];
    return this;
  }

  removeSensor(...sensors) {
    const removedSensors = this.sensors.filter(sensor => sensors.includes(sensor.constructor));
    removedSensors.forEach(sensor => sensor.detach());
    this.sensors = this.sensors.filter(sensor => !sensors.includes(sensor.constructor));
    return this;
  }

  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
    this.sensors.forEach(sensor => sensor.addContainer(...containers));
    return this;
  }

  removeContainer(...containers) {
    this.containers = this.containers.filter(container => !containers.includes(container));
    this.sensors.forEach(sensor => sensor.removeContainer(...containers));
    return this;
  }

  on(type, ...callbacks) {
    this.emitter.on(type, ...callbacks);
    return this;
  }

  off(type, callback) {
    this.emitter.off(type, callback);
    return this;
  }

  trigger(event) {
    this.emitter.trigger(event);
    return this;
  }

  getClassNameFor(name) {
    return this.getClassNamesFor(name)[0];
  }

  getClassNamesFor(name) {
    const classNames = this.options.classes[name];
    if (classNames instanceof Array) {
      return classNames;
    } else if (typeof classNames === 'string' || classNames instanceof String) {
      return [classNames];
    } else {
      return [];
    }
  }

  isDragging() {
    return Boolean(this.dragging);
  }

  getDraggableElements() {
    return this.containers.reduce((current, container) => {
      return [...current, ...this.getDraggableElementsForContainer(container)];
    }, []);
  }

  getDraggableElementsForContainer(container) {
    const allDraggableElements = container.querySelectorAll(this.options.draggable);
    return [...allDraggableElements].filter(childElement => {
      return childElement !== this.originalSource && childElement !== this.mirror;
    });
  }

  cancel() {
    this[dragStop]();
  }

  [onDragStart](event) {
    const sensorEvent = getSensorEvent(event);
    const {
      target,
      container,
      originalSource
    } = sensorEvent;
    if (!this.containers.includes(container)) {
      return;
    }
    if (this.options.handle && target && !closest(target, this.options.handle)) {
      sensorEvent.cancel();
      return;
    }
    this.originalSource = originalSource;
    this.sourceContainer = container;
    if (this.lastPlacedSource && this.lastPlacedContainer) {
      clearTimeout(this.placedTimeoutID);
      this.lastPlacedSource.classList.remove(...this.getClassNamesFor('source:placed'));
      this.lastPlacedContainer.classList.remove(...this.getClassNamesFor('container:placed'));
    }
    this.source = this.originalSource.cloneNode(true);
    this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
    this.originalSource.style.display = 'none';
    const dragStartEvent = new DragStartEvent({
      source: this.source,
      originalSource: this.originalSource,
      sourceContainer: container,
      sensorEvent
    });
    this.trigger(dragStartEvent);
    this.dragging = !dragStartEvent.canceled();
    if (dragStartEvent.canceled()) {
      this.source.remove();
      this.originalSource.style.display = null;
      return;
    }
    this.originalSource.classList.add(...this.getClassNamesFor('source:original'));
    this.source.classList.add(...this.getClassNamesFor('source:dragging'));
    this.sourceContainer.classList.add(...this.getClassNamesFor('container:dragging'));
    document.body.classList.add(...this.getClassNamesFor('body:dragging'));
    applyUserSelect(document.body, 'none');
    requestAnimationFrame(() => {
      const oldSensorEvent = getSensorEvent(event);
      const newSensorEvent = oldSensorEvent.clone({
        target: this.source
      });
      this[onDragMove]({
        ...event,
        detail: newSensorEvent
      });
    });
  }

  [onDragMove](event) {
    if (!this.dragging) {
      return;
    }
    const sensorEvent = getSensorEvent(event);
    const {
      container
    } = sensorEvent;
    let target = sensorEvent.target;
    const dragMoveEvent = new DragMoveEvent({
      source: this.source,
      originalSource: this.originalSource,
      sourceContainer: container,
      sensorEvent
    });
    this.trigger(dragMoveEvent);
    if (dragMoveEvent.canceled()) {
      sensorEvent.cancel();
    }
    target = closest(target, this.options.draggable);
    const withinCorrectContainer = closest(sensorEvent.target, this.containers);
    const overContainer = sensorEvent.overContainer || withinCorrectContainer;
    const isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
    const isLeavingDraggable = this.currentOver && target !== this.currentOver;
    const isOverContainer = overContainer && this.currentOverContainer !== overContainer;
    const isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;
    if (isLeavingDraggable) {
      const dragOutEvent = new DragOutEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        over: this.currentOver,
        overContainer: this.currentOverContainer
      });
      this.currentOver.classList.remove(...this.getClassNamesFor('draggable:over'));
      this.currentOver = null;
      this.trigger(dragOutEvent);
    }
    if (isLeavingContainer) {
      const dragOutContainerEvent = new DragOutContainerEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer: this.currentOverContainer
      });
      this.currentOverContainer.classList.remove(...this.getClassNamesFor('container:over'));
      this.currentOverContainer = null;
      this.trigger(dragOutContainerEvent);
    }
    if (isOverContainer) {
      overContainer.classList.add(...this.getClassNamesFor('container:over'));
      const dragOverContainerEvent = new DragOverContainerEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer
      });
      this.currentOverContainer = overContainer;
      this.trigger(dragOverContainerEvent);
    }
    if (isOverDraggable) {
      target.classList.add(...this.getClassNamesFor('draggable:over'));
      const dragOverEvent = new DragOverEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer,
        over: target
      });
      this.currentOver = target;
      this.trigger(dragOverEvent);
    }
  }

  [dragStop](event) {
    if (!this.dragging) {
      return;
    }
    this.dragging = false;
    const dragStopEvent = new DragStopEvent({
      source: this.source,
      originalSource: this.originalSource,
      sensorEvent: event ? event.sensorEvent : null,
      sourceContainer: this.sourceContainer
    });
    this.trigger(dragStopEvent);
    if (!dragStopEvent.canceled()) this.source.parentNode.insertBefore(this.originalSource, this.source);
    this.source.remove();
    this.originalSource.style.display = '';
    this.source.classList.remove(...this.getClassNamesFor('source:dragging'));
    this.originalSource.classList.remove(...this.getClassNamesFor('source:original'));
    this.originalSource.classList.add(...this.getClassNamesFor('source:placed'));
    this.sourceContainer.classList.add(...this.getClassNamesFor('container:placed'));
    this.sourceContainer.classList.remove(...this.getClassNamesFor('container:dragging'));
    document.body.classList.remove(...this.getClassNamesFor('body:dragging'));
    applyUserSelect(document.body, '');
    if (this.currentOver) {
      this.currentOver.classList.remove(...this.getClassNamesFor('draggable:over'));
    }
    if (this.currentOverContainer) {
      this.currentOverContainer.classList.remove(...this.getClassNamesFor('container:over'));
    }
    this.lastPlacedSource = this.originalSource;
    this.lastPlacedContainer = this.sourceContainer;
    this.placedTimeoutID = setTimeout(() => {
      if (this.lastPlacedSource) {
        this.lastPlacedSource.classList.remove(...this.getClassNamesFor('source:placed'));
      }
      if (this.lastPlacedContainer) {
        this.lastPlacedContainer.classList.remove(...this.getClassNamesFor('container:placed'));
      }
      this.lastPlacedSource = null;
      this.lastPlacedContainer = null;
    }, this.options.placedTimeout);
    const dragStoppedEvent = new DragStoppedEvent({
      source: this.source,
      originalSource: this.originalSource,
      sensorEvent: event ? event.sensorEvent : null,
      sourceContainer: this.sourceContainer
    });
    this.trigger(dragStoppedEvent);
    this.source = null;
    this.originalSource = null;
    this.currentOverContainer = null;
    this.currentOver = null;
    this.sourceContainer = null;
  }

  [onDragStop](event) {
    this[dragStop](event);
  }

  [onDragPressure](event) {
    if (!this.dragging) {
      return;
    }
    const sensorEvent = getSensorEvent(event);
    const source = this.source || closest(sensorEvent.originalEvent.target, this.options.draggable);
    const dragPressureEvent = new DragPressureEvent({
      sensorEvent,
      source,
      pressure: sensorEvent.pressure
    });
    this.trigger(dragPressureEvent);
  }
}
function getSensorEvent(event) {
  return event.detail;
}
function applyUserSelect(element, value) {
  element.style.webkitUserSelect = value;
  element.style.mozUserSelect = value;
  element.style.msUserSelect = value;
  element.style.oUserSelect = value;
  element.style.userSelect = value;
}

export { Draggable as default, defaultOptions };
